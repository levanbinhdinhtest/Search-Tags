let content = document.querySelector('.content');
let input = document.querySelector('input');
let btnRomove = document.querySelector('.remove')

let tags = ['NodeJs','ReactJs'];

function render(){
    content.innerHTML=''
    for(let i=0;i<tags.length;i++)
    {
        const tag = tags[i];
        content.innerHTML +=`<li>
                            ${tag}
                            <i class='bx bx-x' onclick="removeItem(${i})"></i>
                            </li>`
    }
    content.appendChild(input);
    input.focus();
}
render();

input.addEventListener('keydown',function(e){
    //ktra xem text nhap vao co ton tai trong mang hay k
    if(!tags.includes(input.value.trim())&& input.value.trim()!='')
    {
        //neu gap enter thi thuc thi lenh
        if(e.key=='Enter'){
            //them text vua nhap vao mang
            tags.push(input.value.trim());
            input.value='';
            //goi lai ham render
            render();
        }
    }
})

function removeItem(index){
    tags.splice(index,1)
    render();
    console.log(index)
}

btnRomove.addEventListener('click',function(){
    tags = []
    render();
})
