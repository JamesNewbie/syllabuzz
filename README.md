# Syllabuzz 學蜂

我的課程影片網站，免費分享我在資安領域修過的課程。

網站：https://jamesnewbie.github.io/syllabuzz/

## 檔案結構

- index.html：首頁（EN／中文切換）
- cryptography.html：密碼學課程頁（播放器＋章節列表）
- assets/：樣式、程式、Logo
- videos/：影片，檔名需為 Cryptography_Chapter1.mp4 … Cryptography_Chapter7.mp4

## 上傳影片

1. 打開 https://github.com/JamesNewbie/syllabuzz/upload/main/videos
2. 把 7 支影片拖進去（每支要小於 25MB），按「Commit changes」。
3. 等 1–2 分鐘，網站就能播放。

## 新增一門課

1. 把影片上傳到 videos/。
2. 在 assets/app.js 最上方的 COURSES 裡，照密碼學的格式新增一門課。
3. 複製 cryptography.html，改檔名，並把 body 的 data-course 改成新課程的 key。
