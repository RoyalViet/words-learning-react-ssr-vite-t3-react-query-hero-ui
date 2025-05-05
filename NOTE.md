### note when split chunk lib

_Tách là hợp lý: react, react-dom, react-router_

- Kích thước lớn (>50KB).
- Dùng rộng rãi (mọi component/route).
- Cần cho SSR/hydration.
- Phiên bản ổn định (React 18, React Router v7).

_Tách là hợp lý nếu: react-hook-form, zod_

- Dùng trong nhiều form/route (như Deposit).
- Kích thước đáng kể (~30-50KB).
- Phiên bản khóa trong package.json. ( if dont have previous ^x.x.x )

### flatRoutes quét thư mục routes (mặc định, được cấu hình bởi plugin reactRouter() trong vite.config.ts) và ánh xạ các file .tsx thành các route.

**Quy tắc đặt tên file:**
_Tên file xác định đường dẫn (path) của route._
_Các ký tự đặc biệt (\_, $, .) có ý nghĩa cụ thể:_
\_: Thường dùng cho layout routes hoặc index routes.
$: Chỉ định dynamic segment (tham số động trong URL, như :param).
.: Tách các phần trong đường dẫn, tương ứng với / trong URL.

File $.tsx định nghĩa một catch-all route (route bắt tất cả), xử lý mọi đường dẫn không khớp với các route khác.
Ký tự $ trong tên file là ký tự đặc biệt của React Router v7, biểu thị một wildcard (\*), tương ứng với mọi URL không được định nghĩa.

### loader & action

**Loader**
_Định nghĩa:_

- Hàm loader được gọi khi một route được truy cập (thường qua HTTP GET) để tải dữ liệu trước khi render.
- Nó chạy trên server (trong SSR) hoặc client (nếu navigation xảy ra trong trình duyệt).
- Dữ liệu từ loader được truyền đến component thông qua useLoaderData

_Vai trò:_

- Preload dữ liệu để cải thiện hiệu suất và SEO trong SSR.
- Đảm bảo component có dữ liệu cần thiết trước khi render.
- Thường dùng cho các thao tác đọc dữ liệu (như lấy thông tin người dùng, danh sách sách).

**Action**
_Định nghĩa:_

- Hàm action được gọi khi một route nhận yêu cầu POST, PUT, DELETE (thường từ form hoặc hành động người dùng) để thực hiện thay đổi dữ liệu.
- Nó chạy trên server (trong SSR) hoặc client (nếu action xảy ra trong trình duyệt).
- Dữ liệu từ action được xử lý để cập nhật server hoặc trả về kết quả.

_Vai trò:_

- Xử lý các hành động như gửi form, cập nhật dữ liệu, hoặc thực hiện mutation.
- Thường dùng cho các thao tác ghi dữ liệu (như đăng nhập, đánh dấu từ vựng đã học).
- Có thể redirect hoặc trả về dữ liệu sau khi xử lý.

### Layout Router setting tutorial

routes/
├── \_index.tsx # Route: /
├── $.tsx                         # Route: * (404)
├── $bookSlug.words.tsx           # Route: /:bookSlug/words
├── trpc.$trpc.ts # Route: /trpc/:trpc
├── app/ # Layout cho các trang chính
│ ├── \_layout.tsx # Layout chính (Nav, Footer)
│ ├── \_index.tsx # Route: /app
│ ├── deposit.tsx # Route: /app/deposit
├── admin/ # Layout cho trang admin
│ ├── \_layout.tsx # Layout admin (Sidebar)
│ ├── \_index.tsx # Route: /admin
│ ├── users.tsx # Route: /admin/users
├── public/ # Layout cho trang công khai
│ ├── \_layout.tsx # Layout công khai (tối giản)
│ ├── login.tsx # Route: /public/login
│ ├── register.tsx # Route: /public/register

### Drizzle ORM vs Pisma

**Drizzle ORM**
_Khi nào nên dùng:_

- Dự án TypeScript hiện đại: Cần type-safety mạnh, tích hợp tốt với tRPC và Zod (như getWordsOfKeyword).
- Kiểm soát SQL: Muốn viết truy vấn gần với SQL gốc, hỗ trợ prepared statements (như trong code của bạn).
- Hiệu suất cao: Dự án cần truy vấn nhanh, ít abstraction.
- Dự án nhỏ/đang phát triển: Nhẹ, dễ cấu hình, phù hợp với ứng dụng như SearchWordsList.
- Migration đơn giản: Tạo migration từ schema TypeScript.

_Khi nào không nên dùng:_

- Cần hỗ trợ nhiều database (như MongoDB, Prisma hỗ trợ tốt hơn).
- Muốn cú pháp trừu tượng hơn, ít viết SQL (Prisma phù hợp hơn).

**Prisma**
_Khi nào nên dùng:_

- Dự án full-stack TypeScript: Cần DX tốt, cú pháp đơn giản, tích hợp với Next.js/tRPC.
- Cộng đồng lớn: Muốn tài liệu phong phú, nhiều ví dụ.
- Migration phức tạp: Prisma Migrate tự động hóa tốt, phù hợp với dự án thay đổi schema thường xuyên.
- Hỗ trợ nhiều database: Cần làm việc với MongoDB, CockroachDB, hoặc SQL Server.
- Ứng dụng lớn: Quản lý quan hệ phức tạp (như Word và Book với nhiều liên kết).

_Khi nào không nên dùng:_

- Cần kiểm soát SQL chi tiết (Drizzle tốt hơn).
- Dự án ưu tiên hiệu suất tối đa (Prisma có overhead - Overhead của Prisma đề cập đến các chi phí bổ sung (về hiệu suất, kích thước bundle, và độ phức tạp) so với các giải pháp nhẹ hơn như Drizzle ORM).

**TypeORM**
_Khi nào nên dùng:_

- Dự án cũ: Đã sử dụng TypeORM và không muốn chuyển đổi.
- Hỗ trợ nhiều database: Cần Oracle hoặc MongoDB.
- Active Record: Thích mô hình Active Record (gắn logic vào entity).
- Ứng dụng trung bình: Không cần migration phức tạp.

_Khi nào không nên dùng:_

- Dự án TypeScript mới (Prisma/Drizzle type-safe hơn).
- Cần hiệu suất cao hoặc truy vấn phức tạp (TypeORM chậm hơn).
- Muốn cộng đồng tích cực (TypeORM bảo trì kém).

### Prima overhead

**Overhead về hiệu suất**
_Trừu tượng hóa truy vấn:_

- Prisma sử dụng Prisma Client, một lớp trừu tượng hóa cao để tạo truy vấn SQL. Điều này dẫn đến việc Prisma sinh ra các truy vấn SQL phức tạp hơn so với viết trực tiếp (như Drizzle).
- Hậu quả: Prisma có thể chậm hơn một chút (vài ms) cho các truy vấn phức tạp hoặc khi tải dữ liệu lớn.

_Khởi tạo Prisma Client:_

- Prisma Client cần thời gian để khởi tạo (đọc schema, tạo kết nối database), đặc biệt trong môi trường serverless (như Vercel). Điều này có thể tăng thời gian cold start.
- Drizzle nhẹ hơn, khởi tạo nhanh hơn do không cần schema riêng biệt (schema nằm trong code TypeScript).

_Connection pooling:_

- Prisma tự quản lý connection pool, nhưng cấu hình mặc định có thể không tối ưu cho ứng dụng có lưu lượng truy cập cao. Drizzle cho phép kiểm soát chi tiết hơn qua driver gốc (như pg cho PostgreSQL).

**Overhead về độ phức tạp**
_Prisma Schema:_

- Prisma yêu cầu duy trì file schema.prisma riêng (như model Word { ... }), đồng bộ với database qua prisma migrate. Điều này tạo thêm công việc so với Drizzle, nơi schema được định nghĩa trực tiếp trong TypeScript
- Hậu quả: Prisma cần học cú pháp schema riêng, tăng độ phức tạp cho đội ngũ.

_Migration:_

- Prisma Migrate mạnh nhưng có thể tạo migration phức tạp (như thêm kiểm tra ràng buộc), đòi hỏi chạy lệnh như npx prisma migrate dev. Drizzle tạo migration đơn giản hơn từ schema TypeScript: npx drizzle-kit generate:pg
