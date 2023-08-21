import { FC } from "react";

interface Props {}

const Peugeot3008Info: FC<Props> = (props): JSX.Element => {
  return (
    <table className="w-full">
      <tbody>
        <tr>
          <td colSpan={2} width="530" height="21">
            <strong>THÔNG SỐ KỸ THUẬT / TECHNICAL DATA</strong>
          </td>
          <td width="280">
            <strong>New 3008 AT</strong>
          </td>
          <td width="280">
            <strong>New 3008 AL</strong>
          </td>
          <td width="280">
            <strong>New 3008 GT</strong>
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="19">
            <strong>KÍCH THƯỚC – TRỌNG LƯỢNG / DIMENSIONS – WEIGHT</strong>
          </td>
          <td width="280"></td>
          <td width="280"></td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Kích thước tổng thể / Overall dimensions (mm)
          </td>
          <td width="280">4.510 x 1.850 x 1.650</td>
          <td width="280">4.510 x 1.850 x 1.662</td>
          <td width="280">4.510 x 1.850 x 1.662</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Chiều dài cơ sở / Wheelbase (mm)
          </td>
          <td width="280">2.730</td>
          <td width="280">2.730</td>
          <td width="280">2.730</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Khoảng sáng gầm xe / Ground clearance (mm)
          </td>
          <td width="280">165</td>
          <td width="280">165</td>
          <td width="280">165</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Bán kính quay vòng tối thiểu / Minimum turning circle radius (mm)
          </td>
          <td width="280">5.200</td>
          <td width="280">5.200</td>
          <td width="280">5.200</td>
        </tr>
        <tr>
          <td rowSpan={2} width="149" height="40">
            Trọng lượng / Weight
          </td>
          <td width="381">Không tải / Curb (kg)</td>
          <td width="280">1.450</td>
          <td width="280">1.480</td>
          <td width="280">1480</td>
        </tr>
        <tr>
          <td width="381" height="20">
            Toàn tải / Gross (kg)
          </td>
          <td width="280">1.900</td>
          <td width="280">1.930</td>
          <td width="280">1.930</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Số chỗ ngồi / Seating capacity
          </td>
          <td width="280">5</td>
          <td width="280">5</td>
          <td width="280">5</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Dung tích thùng nhiên liệu / Fuel tank capacity (L)
          </td>
          <td width="280">53</td>
          <td width="280">53</td>
          <td width="280">53</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="19">
            <strong>ĐỘNG CƠ – VẬN HÀNH / ENGINE – PERFORMANCE</strong>
          </td>
          <td width="280"></td>
          <td width="280"></td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Loại động cơ / Engine type
          </td>
          <td width="280">1.6L Turbo High Pressure (THP)</td>
          <td width="280">1.6L Turbo High Pressure (THP)</td>
          <td width="280">1.6L Turbo High Pressure (THP)</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Dung tích xy lanh / Displacement
          </td>
          <td width="280">1.599 cc</td>
          <td width="280">1.599 cc</td>
          <td width="280">1.599 cc</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Công suất cực đại / Maximum output (hp @ rpm)
          </td>
          <td width="280">165 @ 6.000</td>
          <td width="280">165 @ 6.000</td>
          <td width="280">165 @ 6.000</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Mô-men xoắn cực đại / Maximum torque (Nm @ rpm)
          </td>
          <td width="280">245 @ 1.400 – 4.000</td>
          <td width="280">245 @ 1.400 – 4.000</td>
          <td width="280">245 @ 1.400 – 4.000</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Hộp số / Transmission
          </td>
          <td width="280">Tự động 6 cấp / 6-speed automatic</td>
          <td width="280">Tự động 6 cấp / 6-speed automatic</td>
          <td width="280">Tự động 6 cấp / 6-speed automatic</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Dẫn động / Drivetrain
          </td>
          <td width="280">Cầu trước / FWD</td>
          <td width="280">Cầu trước / FWD</td>
          <td width="280">Cầu trước / FWD</td>
        </tr>
        <tr>
          <td row-span="3" width="530" height="20">
            Mức tiêu thụ nhiên liệu / Fuel consumption (L/100 km)
          </td>
          <td width="530" height="20">
            Kết hợp / Combination
          </td>
          <td width="280">7,16</td>
          <td width="280">6,84</td>
          <td width="280">8,13</td>
        </tr>
        <tr>
          <td width="530" height="20">
            Trong đô thị / Urban
          </td>
          <td width="280">8,73</td>
          <td width="280">9,44</td>
          <td width="280">10,81</td>
        </tr>
        <tr>
          <td width="530" height="20">
            Ngoài đô thị / Extra urban
          </td>
          <td width="280">6,26</td>
          <td width="280">5,41</td>
          <td width="280">6,6</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="19">
            <strong>KHUNG GẦM / CHASSIS</strong>
          </td>
          <td width="280"></td>
          <td width="280"></td>
          <td></td>
        </tr>
        <tr>
          <td row-span={2} width="149" height="78">
            Hệ thống treo / Suspension system
          </td>
          <td width="381">Trước / Front</td>
          <td width="280">
            Độc lập kiểu MacPherson / Independent wheels – MacPherson axle
          </td>
          <td width="280">
            Độc lập kiểu MacPherson / Independent wheels – MacPherson axle
          </td>
          <td width="280">
            Độc lập kiểu MacPherson / Independent wheels – MacPherson axle
          </td>
        </tr>
        <tr>
          <td width="381" height="39">
            Sau / Rear
          </td>
          <td width="280">
            Bán độc lập / Semi-independent wheels – Twist beam axle
          </td>
          <td width="280">
            Bán độc lập / Semi-independent wheels – Twist beam axle
          </td>
          <td width="280">
            Bán độc lập / Semi-independent wheels – Twist beam axle
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Hệ thống phanh / Braking system
          </td>
          <td width="280">Đĩa x Đĩa / Disc x Disc</td>
          <td width="280">Đĩa x Đĩa / Disc x Disc</td>
          <td width="280">Đĩa x Đĩa / Disc x Disc</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Trợ lực lái / Power steering
          </td>
          <td width="280">Trợ lực điện / Electric power steering</td>
          <td width="280">Trợ lực điện / Electric power steering</td>
          <td width="280">Trợ lực điện / Electric power steering</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="39">
            Mâm xe / Wheel
          </td>
          <td width="280">
            Mâm hợp kim 18-inch kiểu Los Angeles / Los Angeles design 18-inch
            Alloy wheels
          </td>
          <td width="280">
            Mâm hợp kim 18-inch kiểu Los Angeles / Los Angeles design 18-inch
            Alloy wheels
          </td>
          <td width="280">
            Mâm hợp kim 19-inch kiểu New York / New York design 19-inch Alloy
            wheels
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Thông số lốp / Tire
          </td>
          <td width="280">225/55 R18</td>
          <td width="280">225/55 R18</td>
          <td width="280">235/50 R19</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            <strong>TRANG THIẾT BỊ CHÍNH / HIGHLIGHTED FEATURES</strong>
          </td>
          <td width="280"></td>
          <td width="280"></td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="19">
            <strong>NGOẠI THẤT / EXTERIOR</strong>
          </td>
          <td width="280"></td>
          <td width="280"></td>
          <td></td>
        </tr>
        <tr>
          <td row-span="6" width="149" height="137">
            Cụm đèn trước / Front headlamp
          </td>
          <td width="381">Đèn chiếu gần / Low beam</td>
          <td width="280">LED</td>
          <td width="280">LED projector</td>
          <td width="280">LED projector</td>
        </tr>
        <tr>
          <td width="381" height="20">
            Đèn chiếu xa / High beam
          </td>
          <td width="280">LED</td>
          <td width="280">LED projector</td>
          <td width="280">LED projector</td>
        </tr>
        <tr>
          <td width="381" height="37">
            Đèn LED ban ngày dạng nanh sư tử / LED daytime running lamps with
            distinctive ‘Tooth’ design
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td width="381" height="20">
            Tự động bật/tắt / Auto headlight
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td height="20">Đèn chờ dẫn đường tự động / Auto follow me home</td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td width="381" height="20">
            Cân bằng góc chiếu tự động / Auto Levelling
          </td>
          <td width="280">–</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td row-span="4" width="149" height="80">
            Gương chiếu hậu bên ngoài / Side mirrors
          </td>
          <td width="381">Màu sắc / Color</td>
          <td width="280">Sơn đen / Black</td>
          <td width="280">Chrome</td>
          <td width="280">Chrome</td>
        </tr>
        <tr>
          <td width="381" height="20">
            Chỉnh điện &amp; gập điện / Electric heating &amp; folding
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td width="381" height="20">
            Điều chỉnh khi vào số lùi / Reverse gear indexed
          </td>
          <td width="280">–</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td width="381" height="20">
            Đèn chào logo Peugeot / Peugeot logo projection
          </td>
          <td width="280">–</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="35">
            Cụm đèn hậu LED dạng móng vuốt sư tử / Rear LED signature ‘Claw
            Effect’ lights
          </td>
          <td width="280">●</td>
          <td width="280">
            ●&nbsp;<span>(Hiệu ứng 3D / 3D effect)</span>
          </td>
          <td width="280">
            ●&nbsp;<span>(Hiệu ứng 3D / 3D effect)</span>
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Gạt mưa tự động / Auto wipers
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Thanh giá nóc / Roof rail
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Kính 2 lớp tại hàng ghế trước / Acoustic &amp; laminated front side
            windows
          </td>
          <td width="280">–</td>
          <td width="280">–</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="40">
            Kính tối màu tại hàng ghế sau và cốp sau / Extra-tinted rear side
            windows &amp; tailgate window
          </td>
          <td width="280">–</td>
          <td width="280">–</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Cốp sau đóng – mở điện, rảnh tay / Electric boot opening with foot
            sensor
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="32">
            Tay nắm cửa sơn đen bóng &amp; viền mạ chrome / Black exterior door
            handles with chrome detail
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="19">
            <strong>NỘI THẤT / INTERIOR</strong>
          </td>
          <td width="280"></td>
          <td width="280"></td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="37">
            Chất liệu ghế / Seat material
          </td>
          <td width="280">Da phối vải / Leather &amp; fabric</td>
          <td width="280">
            Da Claudia Mistral /<br />
            Mistral Claudia leather
          </td>
          <td width="280">
            Da Claudia Habana /<br />
            Habana Claudia leather
          </td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Vô lăng bọc da / Leather steering wheel
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">Phong cách GT / GT style</td>
        </tr>
        <tr>
          <td colSpan={2} height="20">
            Lẫy chuyển số phía sau tay lái / Paddle shift on steering wheel
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Ghế người lái chỉnh điện / Electric driver’s seat
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Ghế hành khách phía trước chỉnh điện / Electric front passenger’s
            seat
          </td>
          <td width="280">–</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Sưởi ghế trước / Front heating seats
          </td>
          <td width="280">–</td>
          <td width="280">–</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Tất cả cửa sổ chỉnh điện, một chạm / 4 power windows with one-touch
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Bảng đồng hồ kỹ thuật số 12,3 inch / 12,3 inch digital cluster
            display
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Màn hình cảm ứng trung tâm / Touchscreen
          </td>
          <td width="280">8-inch</td>
          <td width="280">10-inch</td>
          <td width="280">10-inch</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="39">
            Kết nối USB, Bluetooth, Apple Carplay &amp; Android Auto / USB,
            Bluetooth, Apple Carplay &amp; Android Auto
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Cần số điện tử / Electric impulse automatic gearbox control
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Phanh tay điện tử / Electric parking brake
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Ốp nội thất / Dashboard sets
          </td>
          <td width="280">Vân carbon / Carbon</td>
          <td width="280">Brumeo Compier</td>
          <td width="280">Alcantara</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="37">
            4 cửa kính chỉnh điện, 1 chạm, chống kẹt / 4 power windows with
            one-touch and anti-pinch
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Điều hòa tự động 2 vùng / Dual-zone automatic air conditioner
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Cửa gió điều hòa dành cho hàng ghế sau / Rear air vent
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Bệ tỳ tay tích hợp ngăn làm mát / Small refrigerator
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Hàng ghế sau gập 60:40 / 2
            <span>
              <sup>nd</sup>
            </span>
            <span>&nbsp;row: 60:40 folding</span>
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Hệ thống âm thanh / Audio system
          </td>
          <td width="280">6 loa / 6 speakers</td>
          <td width="280">6 loa / 6 speakers</td>
          <td width="280">10 loa Focal / 10 Focal speakers</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Sạc không dây / Wireless charging
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Hệ thống định vị &amp; dẫn dường / Navigation
          </td>
          <td width="280">–</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Cửa sổ trời toàn cảnh / Panorama sunroof
          </td>
          <td width="280">–</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Đèn trang trí nội thất / Ambient lighting
          </td>
          <td width="280">–</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Gương chiếu hậu trong xe chống chói tự động / Electrochromic
            interior mirror
          </td>
          <td width="280">–</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Hệ thống kiểm soát chất lượng không khí / Air quality system
          </td>
          <td width="280">–</td>
          <td width="280">–</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            <strong>AN TOÀN / SAFETY</strong>
          </td>
          <td width="280"></td>
          <td width="280"></td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Số túi khí / Number of airbags
          </td>
          <td width="280">6 túi khí / 6 airbags</td>
          <td width="280">6 túi khí / 6 airbags</td>
          <td width="280">6 túi khí / 6 airbags</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            ABS + EBD + ESP
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Khởi hành ngang dốc / Hill assist
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Cảm biến đỗ xe / Parking sensors
          </td>
          <td width="280">Phía sau / Rear</td>
          <td width="280">Trước + sau / Front + rear</td>
          <td width="280">Trước + sau / Front + rear</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Camera lùi 180 độ / 180-degree reversing camera
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Chìa khóa thông minh &amp; khởi động nút bấm / Keyless entry &amp;
            Start/Stop button
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Chế độ lái thể thao / Sport mode
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Ghế ISOFIX tại hàng ghế sau / ISOFIX
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Cảnh báo áp suất lốp / Indirect tyre pressure detection
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Nút xoay lựa chọn chế độ thích nghi địa hình / Advanced grip control
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Hỗ trợ xuống dốc / Hill assist descent control
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Điều khiển hành trình / Cruise control
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Giới hạn tốc độ / Speed limit
          </td>
          <td width="280">●</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Hỗ trợ giữ làn đường / Lane keeping
          </td>
          <td width="280">–</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Hệ thống nhận diện biển báo tốc độ / Speed Limit Information
          </td>
          <td width="280">–</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Nhắc nhở người lái tập trung / Driver attention assist
          </td>
          <td width="280">–</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
        <tr>
          <td colSpan={2} width="530" height="20">
            Cảnh báo điểm mù / Blind spot detection
          </td>
          <td width="280">–</td>
          <td width="280">●</td>
          <td width="280">●</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Peugeot3008Info;
