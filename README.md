# LAB02 - IE402.Q21 - Submitted repository
Live link: https://projrabbit.github.io/rabbit-lab02/

## Thông Tin Chung

- Lớp: IE402.Q21
- Lab: Lab02
- Tên nhóm: Nhóm 9

## Thành Viên Nhóm

| STT | MSSV | Họ và tên |
| --- | --- | --- |
| 1 | 23521718 | Nguyễn Hà Minh Tuấn |
| 2 | 23521687 | Trần Nguyễn Đức Trung |
| 3 | 23521741 | Mô Văn Tùng |
| 4 | 23521747 | Trần Phan Thanh Tùng |
| 5 | 23520870 | Huỳnh Tiến Lợi |


## Cấu Trúc Thư Mục

```text
rabbit-lab02/
├── index.html
├── README.md
├── data/
│   ├── main_data/
│   │   ├── structural-shell.geojson
│   │   ├── stairs-and-gates.geojson
│   │   ├── facade-trims.geojson
│   │   ├── columns.geojson
│   │   ├── doors.geojson
│   │   ├── windows-and-glass.geojson
│   │   ├── balconies.geojson
│   │   ├── terraces.geojson
│   │   ├── roofs.geojson
│   │   └── skylights.geojson
│   └── decorations/
│       ├── site-decorations.json
│       └── round-louver-columns.json
└── src/
    ├── styles/
    │   ├── theme.css
    │   ├── layout.css
    │   └── components.css
    └── scripts/
        ├── scene-bootstrap.js
        ├── settings/
        │   └── app-config.js
        ├── map/
        │   └── scene.js
        └── controls/
            └── map-controls.js
```

## Ý Nghĩa Các Thư Mục Chính

- `index.html`: Trang chính để nạp bản đồ 3D và giao diện điều khiển.
- `data/main_data`: Dữ liệu GeoJSON chính của mô hình 3D, được tách thành các nhóm kiến trúc rõ ràng để chứng minh LoD3.
- `data/decorations`: Dữ liệu trang trí hoặc các graphic bổ sung không thuộc GeoJSON chính.
- `src/styles`: Toàn bộ CSS của giao diện.
- `src/scripts/settings`: Cấu hình đường dẫn dữ liệu, layer, màu sắc và text UI.
- `src/scripts/map`: Hàm khởi tạo SceneView, Map, GeoJSONLayer và GraphicsLayer.
- `src/scripts/controls`: Logic điều khiển giao diện như chọn basemap, reset view và hiển thị camera info.
- `src/scripts/scene-bootstrap.js`: File khởi chạy ứng dụng.

## Dữ Liệu LoD3

Các file trong `data/main_data` được tách theo thành phần kiến trúc:

| File | Nội dung |
| --- | --- |
| `structural-shell.geojson` | Khối chính, tầng, tường, nền |
| `stairs-and-gates.geojson` | Cầu thang và cổng vào |
| `facade-trims.geojson` | Lam, viền, mái che và chi tiết mặt đứng |
| `columns.geojson` | Hệ cột chính, cột phụ, cột mặt đứng |
| `doors.geojson` | Cửa chính và cửa kính ban công |
| `windows-and-glass.geojson` | Cửa sổ, mảng kính, thanh chia cửa |
| `balconies.geojson` | Ban công, lan can, kính bảo vệ |
| `terraces.geojson` | Sân thượng, viền sân thượng và dầm đỡ |
| `roofs.geojson` | Mái, tấm mái và chi tiết mái |
| `skylights.geojson` | Giếng trời, lan can và nền giếng trời |

Mỗi feature có metadata hỗ trợ chứng minh LoD3:

- `lodLevel`: Mức độ chi tiết, hiện là `LoD3`.
- `lod3Category`: Nhóm chi tiết kiến trúc.
- `lod3Evidence`: Mô tả lý do thành phần đó thể hiện LoD3.
- `componentId`: Mã thành phần để renderer gán màu và kiểu hiển thị.
- `componentName`: Tên thành phần hiển thị trong popup.

## Cách Chạy

### Cách 1: Mở trực tiếp

1. Mở thư mục project.
2. Mở file `index.html` bằng trình duyệt.

### Cách 2: Chạy bằng Live Server

1. Mở project bằng Visual Studio Code.
2. Cài extension `Live Server` nếu chưa có.
3. Nhấn chuột phải vào `index.html`.
4. Chọn `Open with Live Server`.

## Yêu Cầu Khi Chạy

- Cần kết nối Internet để tải ArcGIS API từ CDN `https://js.arcgis.com/4.16/`.
- Không cần cài package hoặc chạy build step.
- Nên chạy bằng Live Server để tránh một số giới hạn khi trình duyệt đọc file local.

