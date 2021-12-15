(function(){

    // dragstart, dragover, drop 

    const list = document.querySelector('.list');

    let picked = null;
    let pickedIndex = null;

    list.addEventListener('dragstart', (e)=>{
        const obj = e.target;
        picked = obj
        pickedIndex = [...obj.parentNode.children].indexOf(obj)

        // obj.parentNode.children.indexOf(obj) 배열 방식으로 반환
        //... 내용물만 가져올 수 있는 것

        // console.log(obj)
        picked = e.target
        // console.log(e)
    })
    list.addEventListener('dragover', (e) => {
        e.preventDefault()
        //기본적으로 적용되어 있는 것을 없애줌
        // console.log(e)
    })
    list.addEventListener('drop', (e) => {
        // console.log(e)
        const obj = e.target;
        const index = [...obj.parentNode.children].indexOf(obj)
        // e.target.before(picked)
        if(index > pickedIndex){
            obj.after(picked);
        }else{
            obj.before(picked);
        }

        //삼항연산자 사용시
        // index > pickedIndex ? obj.after(picked) : obj.before(picked)
    })


})();