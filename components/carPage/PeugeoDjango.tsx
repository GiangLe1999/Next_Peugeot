import { FC } from "react";

interface Props {}

const commonClass = "font-bold text-lg text-primary mb-3";

const PeugeoDjango: FC<Props> = (props): JSX.Element => {
  return (
    <div className="space-y-12">
      <div>
        <p className={commonClass}>Động cơ</p>
        <table className="w-full">
          <tbody>
            <tr>
              <td>
                <b>Tiêu chuẩn</b>: Euro 4
              </td>
              <td>
                <b>Công suất tối đa (hp)</b>: 10.2
              </td>
              <td>
                <b>Truyền động</b>: Dây curoa
              </td>
            </tr>
            <tr>
              <td>
                <b>Làm mát</b>: Không khí
              </td>
              <td>
                <b>Tốc độ quay ứng với công suất tối đa (rpm)</b>: 8500
              </td>
              <td>
                <b>Phun nhiên liệu</b>: Điện tử
              </td>
            </tr>
            <tr>
              <td>
                <b>Mức tiêu thụ nhiên liệu (L/100 km)</b>: 2.717
              </td>
              <td>
                <b>Momen xoắn cực đại (Nm)</b>: 9.2
              </td>
              <td>
                <b>Loại động cơ</b>: xi lanh đơn 4 kỳ
              </td>
            </tr>
            <tr>
              <td>
                <b>Homologation</b>: L3e-A2
              </td>
              <td>
                <b>Tốc độ quay ứng với momen xoắn cực đại (rpm)</b>: 8500
              </td>
              <td>
                <b>Tầm hoạt động (km)</b>: 270
              </td>
            </tr>
            <tr>
              <td>
                <b>Phát thải CO2 (g/km)</b>: 2.9
              </td>
              <td>
                <b>Khởi động</b>: Điện
              </td>
              <td>
                <b>Vận tốc tối đa (km/h)</b>: 90
              </td>
            </tr>
            <tr>
              <td>
                <b>Tên động cơ</b>: EasyMotion 125
              </td>
              <td>
                <b>Dung tích xi lanh(cc)</b>: 124.6 cc
              </td>
              <td>
                <b>Tiếng ồn (dB)</b>: N/A
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <p className={commonClass}>Kích thước</p>
        <table className="w-full">
          <tbody>
            <tr>
              <td>
                <b>Chiều dài (mm)</b>: 1925
              </td>
              <td>
                <b>Chiều rộng (mm)</b>: 710
              </td>
              <td>
                <b>Chiều cao (mm)</b>: 1150
              </td>
            </tr>
            <tr>
              <td>
                <b>Chiều dài cơ sở (mm)</b>: 1350
              </td>
              <td>
                <b>Chiều cao yên (mm)</b>: 770
              </td>
              <td>
                <b>Dung tích bình xăng (L)</b>: 8,5
              </td>
            </tr>
            <tr>
              <td>
                <b>Trọng lượng không tải (kg)</b>: 138
              </td>
              <td>
                <b>Trọng lượng khô (kg)</b>: 129
              </td>
              <td>
                <b>Trọng lượng lớn nhất của xe (kg)</b>: 288
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <p className={commonClass}>Hệ thống treo</p>
        <table className="w-full">
          <tbody>
            <tr>
              <td>
                <b>Hệ thống treo trước</b>&nbsp;: Giảm chấn thủy lực dạng ống
                lồng Ø40 mm
              </td>
              <td>
                <b>Loại phanh trước</b>&nbsp;: Đĩa
              </td>
              <td>
                <b>Đường kính phanh sau (mm)</b>&nbsp;: 190
              </td>
            </tr>
            <tr>
              <td>
                <b>Hệ thống treo sau</b>&nbsp;: Giảm chấn thủy lực đơn màu đen Ø
                53 mm, 5 mức điều chỉnh
              </td>
              <td>
                <b>Đường kính phanh trước (mm)</b>&nbsp;: 200
              </td>
              <td>
                <b>Lốp trước (mm /% – in)</b>&nbsp;: 120 / 70-12
              </td>
            </tr>
            <tr>
              <td>
                <b>Hệ thống an toàn</b>&nbsp;: ABS Bánh trước
              </td>
              <td>
                <b>Loại phanh sau</b>&nbsp;: Đĩa
              </td>
              <td>
                <b>Lốp sau (mm /% – in)</b>&nbsp;: 120 / 70-12
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <p className={commonClass}>Trang bị</p>
        <table className="w-full">
          <tbody>
            <tr>
              <td>
                <b>Chân chống nghiêng điện tử</b>&nbsp;: Có
              </td>
              <td>
                <b>Ngăn chứa dưới yên xe</b>&nbsp;: 1 mũ bảo hiểm toàn đầu + 1
                mũ bảo hiểm 1/2
              </td>
              <td>
                <b>Đồng hồ trung tâm</b>&nbsp;: Analog / Kỹ thuật số
              </td>
            </tr>
            <tr>
              <td>
                <b>Ổ điện</b>&nbsp;: USB 12V trong ngăn chứa găng tay
              </td>
              <td>
                <b>Ngăn chứa găng tay</b>&nbsp;: 2 ngăn chứa găng tay có khóa
              </td>
              <td>
                <b>Móc treo đồ</b>&nbsp;: Có thể gập lại
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PeugeoDjango;
