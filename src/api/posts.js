//axios

const posts = [
  {id: 1, title: '제목 1', content:'내용 1', createdAt: '2021-01-01'},
  {id: 2, title: '제목 2', content:'내용 2', createdAt: '2021-01-02'},
  {id: 3, title: '제목 3', content:'내용 3', createdAt: '2021-01-03'},
  {id: 4, title: '제목 4', content:'내용 4', createdAt: '2021-01-04'},
  {id: 5, title: '제목 5', content:'내용 5', createdAt: '2021-01-05'}, 
]

export function getPosts(){
  return posts
}