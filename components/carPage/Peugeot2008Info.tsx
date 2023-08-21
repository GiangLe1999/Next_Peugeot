import { FC } from "react";

interface Props {}

const Peugeot2008Info: FC<Props> = (props): JSX.Element => {
  return (
    <table className="w-full">
      <tbody>
        <tr>
          <td colSpan={2} width="214">
            <strong>PEUGEOT 2008</strong>
          </td>
          <td width="211">
            <strong>ACTIVE</strong>
          </td>
          <td width="211">
            <strong>GT LINE</strong>
          </td>
        </tr>
        <tr>
          <td colSpan={4} width="857">
            <strong>KÍCH THƯỚC – TRỌNG LƯỢNG / DIMENSIONS – WEIGHT</strong>
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Kích thước tổng thể (D x R x C) / Overall dimensions (L x W x H)
          </td>
          <td colSpan={2} width="422">
            4.300 x 1.770 x 1.550 mm
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Chiều dài cơ sở / Wheelbase
          </td>
          <td colSpan={2} width="422">
            2.605 mm
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Chiều rộng cơ sở trước/sau / Front/rear track width
          </td>
          <td colSpan={2} width="422">
            1.540 / 1.540 mm
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Khoảng sáng gầm xe / Ground clearance
          </td>
          <td colSpan={2} width="422">
            175 mm
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Bán kính quay vòng tối thiểu / Minimum turning circle radius
          </td>
          <td colSpan={2} width="422">
            5.400 mm
          </td>
        </tr>
        <tr>
          <td row-span={2} width="214">
            Trọng lượng / Weight
          </td>
          <td width="221">Không tải / Curb</td>
          <td colSpan={2} width="422">
            1.225 kg
          </td>
        </tr>
        <tr>
          <td width="221">Toàn tải / Gross</td>
          <td colSpan={2} width="422">
            1.730 kg
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Số chỗ ngồi / Seating capacity
          </td>
          <td colSpan={2} width="422">
            5 chỗ / 5 seats
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Dung tích thùng nhiên liệu / Fuel tank capacity
          </td>
          <td colSpan={2} width="422">
            44 lít / 44 litres
          </td>
        </tr>
        <tr>
          <td colSpan={4} width="857">
            <strong>ĐỘNG CƠ – VẬN HÀNH / ENGINE – PERFORMANCE</strong>
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Loại động cơ / Engine type
          </td>
          <td colSpan={2} width="422">
            Turbo Puretech
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Dung tích xy lanh / Displacement
          </td>
          <td colSpan={2} width="422">
            1.199 cc
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Công suất cực đại / Max. power
          </td>
          <td colSpan={2} width="422">
            133 hp @ 4.000 – 6.000 rpm
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Mô men xoắn cực đại / Max. torque
          </td>
          <td colSpan={2} width="422">
            230 Nm @ 1.750 – 3.500 rpm
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Hộp số / Transmission
          </td>
          <td colSpan={2} width="422">
            Tự động 6 cấp / 6-speed automatic
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Dẫn động / Drivetrain
          </td>
          <td colSpan={2} width="422">
            Cầu trước / FWD
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Vận tốc tối đa / Max speed
          </td>
          <td colSpan={2} width="422">
            196 km/h
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Tăng tốc 0 – 100 km/h / 0 – 100 km/h acceleration
          </td>
          <td colSpan={2} width="422">
            10,2 s
          </td>
        </tr>
        <tr>
          <td row-span="3" width="214">
            Tiêu hao nhiên liệu (lít/100 km) / Fuel consumption (litre/100 km)
          </td>
          <td width="221">Trong đô thị / Urban</td>
          <td colSpan={2} width="422">
            8,0
          </td>
        </tr>
        <tr>
          <td width="221">Ngoài đô thị / Extra urban</td>
          <td colSpan={2} width="422">
            4,7
          </td>
        </tr>
        <tr>
          <td width="221">Kết hợp / Combination</td>
          <td colSpan={2} width="422">
            5,9
          </td>
        </tr>
        <tr>
          <td colSpan={4} width="857">
            <strong>KHUNG GẦM / CHASSIS</strong>
          </td>
        </tr>
        <tr>
          <td row-span={2} width="214">
            Hệ thống treo / Suspension system
          </td>
          <td width="221">Trước / Front</td>
          <td colSpan={2} width="422">
            Độc lập kiểu McPhersen / Independent McPherson struts
          </td>
        </tr>
        <tr>
          <td width="221">Sau / Rear</td>
          <td colSpan={2} width="422">
            Torsion beam / Thanh xoắn
          </td>
        </tr>
        <tr>
          <td width="214">Hệ thống phanh / Brake system</td>
          <td width="221">Trước x Sau / Front x Rear</td>
          <td colSpan={2} width="422">
            Đĩa x Đĩa / Disc x Disc
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Trợ lực lái / Power steering
          </td>
          <td colSpan={2} width="422">
            Trợ lực điện / Electric power steering
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Mâm xe / Wheels
          </td>
          <td colSpan={2} width="422">
            Mâm hợp kim 17-inch kiểu Salamanca / Salamanca design 17-inch Alloy
            wheels
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Thông số lốp / Tyres
          </td>
          <td colSpan={2} width="422">
            215/60 R17
          </td>
        </tr>
        <tr>
          <td colSpan={4} width="857">
            <strong>TRANG THIẾT BỊ CHÍNH / HIGHLIGHTED FEATURES</strong>
          </td>
        </tr>
        <tr>
          <td colSpan={4} width="857">
            <strong>NGOẠI THẤT / EXTERIOR</strong>
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Cụm đèn trước / Front headlamps
          </td>
          <td width="211">LED</td>
          <td width="211">
            LED với đèn ban ngày dạng 3 móng vuốt / LED with 3-Claw design
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Đèn LED ban ngày dạng nanh sư tử / LED daytime running lamps with
            distinctive ‘Tooth’ design
          </td>
          <td width="211">●</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Đèn trước thích ứng tự động / Automatic headlamps dipping
          </td>
          <td width="211">–</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Gạt mưa tự động / Auto wipers
          </td>
          <td width="211">–</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Thanh giá nóc / Roof rail
          </td>
          <td width="211">–</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Cụm đèn hậu Full LED 3D dạng móng vuốt sư tử / Rear full LED 3D
            signature ‘Claw Effect’ lights
          </td>
          <td width="211">●</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Gương chiếu hậu sơn đen, chỉnh điện, gập điện, sấy &amp; tích hợp
            báo rẽ / Side mirrors with electric adjustment, folding, heating
            &amp; turning lights
          </td>
          <td width="211">●</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Tay nắm cửa sơn đen bóng &amp; viền mạ chrome / Black exterior door
            handles with chrome detail
          </td>
          <td width="211">●</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={4} width="857">
            <strong>NỘI THẤT / INTERIOR</strong>
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Bảng đồng hồ / Instrument panel
          </td>
          <td width="211">
            Analog cùng màn hình hiển thị đa thông tin 3,5” / Analog with 3,5”
            display
          </td>
          <td width="211">
            Màn hình điện tử 10″ hiệu ứng 3D /&nbsp; 10” 3D digital dashboard
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Màn hình giải trí / Touchscreen
          </td>
          <td width="211">
            7”, kết nối Apple CarPlay &amp; MirrorLink / 7”, connecting Apple
            CarPlay &amp; MirrorLink
          </td>
          <td width="211">
            7”, kết nối Apple CarPlay &amp; MirrorLink / 7”, connecting Apple
            CarPlay &amp; MirrorLink
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Chất liệu ghế / Seat material
          </td>
          <td width="211">
            Bọc da, chỉ màu cam / Leather with orange stitching
          </td>
          <td width="211">
            Bọc da, chỉ màu xám / Leather with Gris Beton stitching
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Ghế người lái chỉnh điện / Driver seat: electric adjustment
          </td>
          <td width="211">●</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Vô lăng / Steering wheel
          </td>
          <td width="211">
            Bọc da, chỉ màu cam / Leather with orange stitching
          </td>
          <td width="211">
            Bọc da, chỉ màu xám / Leather with Gris Beton stitching
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Ốp nội thất / Dashboard sets
          </td>
          <td width="211">Vân carbon / Carbon</td>
          <td width="211">Vân carbon / Carbon</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            4 cửa kính chỉnh điện, 1 chạm, chống kẹt / 4 power windows with
            one-touch and anti-pinch
          </td>
          <td width="211">●</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Điều hòa / Air conditioner
          </td>
          <td width="211">1 vùng / 1-zone</td>
          <td width="211">Tự động 1 vùng / Auto 1-zone</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Hàng ghế sau gập 60:40 / 2<sup>nd</sup>&nbsp;row: 60:40 folding
          </td>
          <td width="211">●</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Túi đựng đồ sau ghế trước / Soft map pockets on the back of front
            seats
          </td>
          <td width="211">●</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Hệ thống âm thanh / Audio system
          </td>
          <td width="211">4 loa / 4 speakers</td>
          <td width="211">6 loa / speakers</td>
        </tr>
        <tr>
          <td colSpan={4} width="857">
            <strong>AN TOÀN / SAFETY</strong>
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            ABS + EBD + ESP
          </td>
          <td width="211">●</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Khởi hành ngang dốc / Hill assist
          </td>
          <td width="211">●</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Cảm biến đỗ xe / Parking sensors
          </td>
          <td width="211">Phía sau / Rear</td>
          <td width="211">Trước + sau / Front + rear</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Camera lùi 180 độ / 180-degree reversing camera
          </td>
          <td width="211">●</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Chìa khóa thông minh / Keyless entry
          </td>
          <td width="211">●</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Chế độ lái: Eco/Tiêu chuẩn/Thể thao/bán tự động /
          </td>
          <td row-span={2} width="211">
            ●
          </td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Drive modes: Eco/Normal/Sport/Manual
          </td>
          <td width="211"></td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Số túi khí / Number of airbags
          </td>
          <td width="211">4 túi khí / 4 airbags</td>
          <td width="211">6 túi khí / 6 airbags</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Phanh tay điện tử / Electric parking brake
          </td>
          <td width="211">●</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Ghế ISOFIX tại hàng ghế sau / ISOFIX
          </td>
          <td width="211">●</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Cảnh báo áp suất lốp gián tiếp / Indirect tyre pressure detection
          </td>
          <td width="211">●</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Điều khiển hành trình / Cruise control
          </td>
          <td width="211">–</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Giới hạn tốc độ / Speed limit
          </td>
          <td width="211">–</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Phanh an toàn chủ động / Active safety brake
          </td>
          <td width="211">–</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Hỗ trợ giữ làn đường / Lane keeping
          </td>
          <td width="211">–</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Hệ thống nhận diện biển báo tốc độ / Speed Limit Information
          </td>
          <td width="211">–</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Nhắc nhở người lái tập trung / Driver attention assist
          </td>
          <td width="211">–</td>
          <td width="211">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="435">
            Cảnh báo điểm mù / Blind spot detection
          </td>
          <td width="211">–</td>
          <td width="211">●</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Peugeot2008Info;
