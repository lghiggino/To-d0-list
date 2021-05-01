module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getIndexReact:(req,res)=>{
        res.json("hello")
    }
}