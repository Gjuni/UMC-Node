CREATE TABLE user_mission (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    member_id BIGINT,
    mission_id BIGINT,
    status VARCHAR(15),
    created_at DATETIME(6),
    updated_at DATETIME(6),
    FOREIGN KEY (member_id) REFERENCES member(id),
    FOREIGN KEY (mission_id) REFERENCES mission(id)
);

CREATE TABLE mission (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    store_id BIGINT,
    reward INT,
    deadline DATETIME,
    mission_spec TEXT,
    created_at DATETIME(6),
    updated_at DATETIME(6),
    FOREIGN KEY (store_id) REFERENCES store(id)
);

CREATE TABLE region (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    created_at DATETIME(6),
    updated_at DATETIME(6)
);

CREATE TABLE store (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    region_id BIGINT,
    name VARCHAR(50),
    address VARCHAR(50),
    score FLOAT,
    created_at DATETIME(6),
    updated_at DATETIME(6),
    FOREIGN KEY (region_id) REFERENCES region(id)
);

-- CREATE TABLE member_agree (
--     id BIGINT AUTO_INCREMENT PRIMARY KEY,
--     member_id BIGINT,
--     terms_id BIGINT,
--     created_at DATETIME(6),
--     updated_at DATETIME(6),
--     FOREIGN KEY (member_id) REFERENCES member(id),
--     FOREIGN KEY (terms_id) REFERENCES terms(id)
-- );

-- CREATE TABLE terms (
--     id BIGINT AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(20),
--     body TEXT,
--     optional BOOLEAN,
--     created_at DATETIME(6),
--     updated_at DATETIME(6)
-- );

CREATE TABLE user_prefer (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    member_id BIGINT,
    category_id BIGINT,
    created_at DATETIME(6),
    updated_at DATETIME(6),
    FOREIGN KEY (member_id) REFERENCES member(id),
    FOREIGN KEY (category_id) REFERENCES food_category(id)
);

CREATE TABLE user (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    gender VARCHAR(10),
    age INT,
    address VARCHAR(40),
    spec_address VARCHAR(40),
    status VARCHAR(15),
    inactive_date DATETIME(6),
    social_type VARCHAR(10),
    created_at DATETIME(6),
    updated_at DATETIME(6),
    email VARCHAR(50),
    point INT
);

CREATE TABLE food_category (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(15),
    created_at DATETIME(6),
    updated_at DATETIME(6)
);

CREATE TABLE review (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    member_id BIGINT,
    store_id BIGINT,
    body TEXT,
    score FLOAT,
    created_at DATETIME(6),
    updated_at DATETIME(6),
    FOREIGN KEY (member_id) REFERENCES member(id),
    FOREIGN KEY (store_id) REFERENCES store(id)
);

CREATE TABLE review_image (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    review_id BIGINT,
    image_url VARCHAR(255),
    created_at DATETIME(6),
    updated_at DATETIME(6),
    FOREIGN KEY (review_id) REFERENCES review(id)
);


-- member 테이블 데이터 삽입
INSERT INTO member (name, gender, age, address, spec_address, status, inactive_date, social_type, created_at, updated_at, email, point) VALUES
('홍길동', '남', 30, '서울시 강남구', '서울시 강남구', '활동', NULL, 'none', NOW(), NOW(), 'hong@example.com', 100),
('김영희', '여', 28, '서울시 종로구', '서울시 종로구', '활동', NULL, 'none', NOW(), NOW(), 'kim@example.com', 150);

-- region 테이블 데이터 삽입
INSERT INTO region (name, created_at, updated_at) VALUES
('서울', NOW(), NOW()),
('부산', NOW(), NOW());

-- store 테이블 데이터 삽입
INSERT INTO store (region_id, name, address, score, created_at, updated_at) VALUES
(1, '맛있는 식당', '서울시 강남구 1번지', 4.5, NOW(), NOW()),
(1, '즐거운 카페', '서울시 강남구 2번지', 4.0, NOW(), NOW()),
(2, '부산 해물탕', '부산시 해운대구 3번지', 4.8, NOW(), NOW());

-- food_category 테이블 데이터 삽입
INSERT INTO food_category (name, created_at, updated_at) VALUES
('한식', NOW(), NOW()),
('중식', NOW(), NOW()),
('양식', NOW(), NOW());

-- mission 테이블 데이터 삽입
INSERT INTO mission (store_id, reward, deadline, mission_spec, created_at, updated_at) VALUES
(1, 1000, NOW() + INTERVAL 7 DAY, '식사 후 리뷰 작성', NOW(), NOW()),
(2, 500, NOW() + INTERVAL 3 DAY, '음료 구매', NOW(), NOW());

-- member_mission 테이블 데이터 삽입
INSERT INTO member_mission (member_id, mission_id, status, created_at, updated_at) VALUES
(1, 1, '진행중', NOW(), NOW()),
(2, 2, '완료', NOW(), NOW());

-- terms 테이블 데이터 삽입
INSERT INTO terms (title, body, optional, created_at, updated_at) VALUES
('이용약관', '이용약관 내용입니다.', FALSE, NOW(), NOW()),
('개인정보 처리방침', '개인정보 처리방침 내용입니다.', TRUE, NOW(), NOW());

-- member_agree 테이블 데이터 삽입
INSERT INTO member_agree (member_id, terms_id, created_at, updated_at) VALUES
(1, 1, NOW(), NOW()),
(2, 2, NOW(), NOW());

-- member_prefer 테이블 데이터 삽입
INSERT INTO member_prefer (member_id, category_id, created_at, updated_at) VALUES
(1, 1, NOW(), NOW()),
(2, 2, NOW(), NOW());

-- review 테이블 데이터 삽입
INSERT INTO review (member_id, store_id, body, score, created_at, updated_at) VALUES
(1, 1, '정말 맛있었어요!', 5.0, NOW(), NOW()),
(2, 2, '아늑한 분위기 좋았습니다.', 4.5, NOW(), NOW());

-- review_image 테이블 데이터 삽입
INSERT INTO review_image (review_id, image_url, created_at, updated_at) VALUES
(1, 'http://example.com/image1.jpg', NOW(), NOW()),
(2, 'http://example.com/image2.jpg', NOW(), NOW());
