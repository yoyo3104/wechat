
create table books(
    id int not null auto_increment primary key,
    isbn vachar(20) not null,
    openid vachar(50) not null,
    title vachar(100) not null,
    image vachar(100),
    alt vachar(100) not null,
    publisher vachar(100) not null,
    summary vachar(1000) not null,
    price vachar(100),
    rate float,
    tags vachar(100),
    author vachar(100)
)
    
