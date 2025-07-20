/*プロダクト情報登録*/
INSERT INTO projects (name, type, description, url) VALUES
('res', 0, '模擬サイトPatisserieDAWNのプロジェクト。', '/res'),
('ec', 1, '模擬サイトAreWeStillA...?のプロジェクト。', '/ec'),
('off', 2, '模擬サイトOfficial:ShutterShowcaseのプロジェクト。', '/off');


/*ページ情報登録*/

INSERT INTO pages (project_id, page_name, explain_text) VALUES
(1, 'Loading', '初期レンダリング時間のローディング画面。終了後Homeに強制遷移'),
(1, 'Home', 'ホーム画面'),
(1, 'Aboutus', '店舗紹介画面'),
(1, 'Access', '店舗の情報を記載'),
(1, 'News', 'ニュース一覧を表示'),
(1, 'News_detail', 'ニュースのトピック一つを表示'),
(1, 'Reservation', '予約ページ。'),
(1, 'Reservation_confirm', '予約確認ページ。(タスク終了ポイント)'),
(2, 'Loading', '初期レンダリング時間のローディング画面。終了後Homeに強制遷移'),
(2, 'Home', 'ホーム画面'),
(2, 'Aboutus', '店舗紹介画面'),
(2, 'Product', '取り扱い商品一覧'),
(2, 'Product_Detail', '商品の詳細'),
(2, 'Cart','カート内の商品確認及び購入画面(タスク終了ポイント)'),
(3, 'Loading', '初期レンダリング時間のローディング画面。終了後Homeに強制遷移'),
(2, 'Home', 'ホーム画面'),
(3, 'Retouch', 'レタッチ機能紹介'),
(3, 'Contest', 'コンテスト機能紹介'),
(3, 'register', '登録画面(タスク終了ポイント)');
