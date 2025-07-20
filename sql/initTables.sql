CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    is_firsttime BOOLEAN NOT NULL DEFAULT TRUE,
    age INT NOT NULL,
    gender_id INT NOT NULL,
    create_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB;


CREATE TABLE projects(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type INT NOT NULL,
    description TEXT NULL,
    url VARCHAR(255) NULL
)ENGINE=InnoDB;

CREATE TABLE operations(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    type INT NOT NULL,
    description TEXT NULL
)ENGINE=InnoDB;

CREATE TABLE user_trials(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    project_id INT NOT NULL,
    operation_id INT NOT NULL,
    started_at DATETIME NULL,
    finished_at DATETIME NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (operation_id) REFERENCES operations(id)
)ENGINE=InnoDB;

/*---要素定義---*/

CREATE TABLE pages(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    project_id INT NOT NULL,
    page_name VARCHAR(255) NOT NULL,
    explain_text TEXT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(id)
)ENGINE=InnoDB;

CREATE TABLE elements(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    page_id INT NOT NULL,
    element_name VARCHAR(255) NOT NULL,
    explain_text TEXT NULL,
    FOREIGN KEY (page_id) REFERENCES pages(id)
)ENGINE=InnoDB;

/*---試行情報---*/

CREATE TABLE pageviews(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    page_id INT NOT NULL,
    user_trial_id INT NOT NULL,
    staing_time FLOAT NOT NULL DEFAULT 0,
    after_page INT NULL,
    FOREIGN KEY (page_id) REFERENCES pages(id),
    FOREIGN KEY (user_trial_id) REFERENCES user_trials(id),
    FOREIGN KEY (after_page) REFERENCES pages(id)
)ENGINE=InnoDB;

CREATE TABLE clickevents(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pageview_id INT NOT NULL,
    element_id INT NOT NULL,
    clicked_at DATETIME NULL,/*使うかわからんからNULL許容*/
    FOREIGN KEY (pageview_id) REFERENCES pageviews(id),
    FOREIGN KEY (element_id) REFERENCES elements(id)    
)ENGINE=InnoDB;


CREATE TABLE hover_events(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pageview_id INT NOT NULL,
    element_id INT NOT NULL,
    duration_sec FLOAT NULL,/*使うかわからんからNULL許容*/
    FOREIGN KEY (pageview_id) REFERENCES pageviews(id),
    FOREIGN KEY (element_id) REFERENCES elements(id)    
)ENGINE=InnoDB;

CREATE TABLE scrolls(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pageview_id INT NOT NULL,
    max_depth FLOAT NOT NULL,
    amount FLOAT NOT NULL,
    scroll_count INT NOT NULL,
    FOREIGN KEY (pageview_id) REFERENCES pageviews(id)
)ENGINE=InnoDB;


CREATE TABLE taskresults(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_trial_id INT NOT NULL,
    time FLOAT NOT NULL DEFAULT 0,
    is_success BOOLEAN NOT NULL DEFAULT FALSE,
    total_click INT NOT NULL DEFAULT 0,
    FOREIGN KEY (user_trial_id) REFERENCES user_trials(id)
)ENGINE=InnoDB;

/*---アンケート部分*/
CREATE TABLE surveys(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NULL,
    create_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB;

CREATE TABLE questions(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    survey_id INT NOT NULL,
    question_text TEXT NOT NULL,
    question_type INT NOT NULL,
    is_required BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (survey_id) REFERENCES surveys(id)
)ENGINE=InnoDB;

CREATE TABLE responses(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    survey_id INT NOT NULL,
    user_id INT NOT NULL,
    responded_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (survey_id) REFERENCES surveys(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
)ENGINE=InnoDB;

CREATE TABLE answers(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    response_id INT NOT NULL,
    question_id INT NOT NULL,
    answer_text TEXT NOT NULL,
    FOREIGN KEY (response_id) REFERENCES responses(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
)ENGINE=InnoDB;