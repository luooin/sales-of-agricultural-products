const base = {
    get() {
        return {
            url : "http://localhost:8080/nongchanpin/",
            name: "nongchanpin",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/nongchanpin/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "农产品直卖后台"
        } 
    }
}
export default base
