import axios from 'axios'

let homeApi = {}

homeApi.getNowNews = () => {
  return axios.get("https://i.news.qq.com/trpc.qqnews_web.pc_base_srv.base_http_proxy/NinjaPageContentSync?pull_urls=news_top_2018")
}
homeApi.getTokes = () => {
  return axios.get('https://i.news.qq.com/trpc.qqnews_web.kv_srv.kv_srv_http_proxy/list?sub_srv_id=24hours&srv_id=pc&offset=0&limit=20&strategy=1&ext={%22pool%22:[%22top%22],%22is_filter%22:7,%22check_type%22:true}')
}

export default homeApi;