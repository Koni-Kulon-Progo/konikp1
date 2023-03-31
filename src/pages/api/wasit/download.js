import prisma from '@/utils/prisma';
import * as fxl from '@01group/fxl'
import { Readable } from 'stream'

function setAutoColWidth(cell) {
    if (cell.value) {
      const colWidth = Math.max(cell.value.toString().length, 10);
      return fxl.setColWidth(colWidth)(cell);
    } else {
      return cell;
    }
  }

export default async function handler(req, res) {

    // get data 
    const wasit = await prisma.wasit.findMany({
        include: {
            cabor:true,
        }
    })


    // menentukan header excel
    const headers = fxl.rowToCells([
        "Cabor",
        "Nama",
        "Alamat",
        "Ttl",
        "Telephone",
        "Keterangan",
        "Gender",
    ])


    // menentukan isi excel [ [vcabor,nama,tahaun,...], [cabor], [] ]
    const cells = wasit.map(d => {
        return fxl.rowToCells([d.cabor.nama, d.nama, d.alamat, d.ttl, d.telephone, d.keterangan, d.gender ])
    })

    // menggabungkan table pada excel
    const allCells = fxl.concatBelow(headers, ...cells)
        .map(cell => {
            return fxl.pipe(
                cell,
                fxl.setAllBorders({ style: 'thin', color: 'black' }),
                setAutoColWidth,
            )
        })
    // membuat buffer file excel
    const buffer = await fxl.writeBinary(allCells)
    // mengambil  object buffer dari Result
    const b = buffer.safeUnwrap()
    // menjadikan buffer stream
    const stream = Readable.from(b)

        // content type = menentukan type file yang dikirim browser
        // content-length = memberitahu browser file size yang akan dikirim
        // content dis = memberitahu browser bahwa file ini bisa di download dengan file xlsx
    res.writeHead(200, {
        'Content-Type': 'application/vnd.ms-excel',
        'Content-Length': b.length,
        'Content-Disposition': 'attachment; filename=atlit.xlsx'
    })
        // mengirim binary ke browser
    stream.pipe(res)    
}

