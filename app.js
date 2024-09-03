const addButton = document.querySelector('#add-button');
//이벤트 리스너를 통해 클릭이벤트를 인식하도록 한다
//button을 변수로 만드려고 document.querySelector메서드를 이용해 만든다
//document.querySelector함수 매변수에 버튼의 아이디를 넣으면 버튼요소를 변수에 저장할 수 있다

addButton.addEventListener('click', () => {
//addEventListener에 두의 매개변수를 전달한다
//첫번째는 유형과 두번째는 화살표 함수 표현을 통해 호출할 함수를 전달한다
    const input = document.querySelector('#input');
    //입력칸인 input을 변수로 만들어 document.querySelector로 호출한다
    const text = input.value.trim();
    //사용자 입력을 input.value를 통해 가져오고 문자열 양끝의 공백을 제거해주는 .trim()메서드를 사용해준다


    if (text !==''){
    //사용자 입력이 빈칸이 아닌지 확인하는 조건문을 넣어준다 빈입력을 방지하는 것!    
        addToList(text);
        //새로운 항목을 리스트에 추가하는 기능은 addToList라는 함수를 만들어준다
        input.value= '';
        //사용자 입력칸을 빈칸으로 리셋해준다
        input.focus();
        //입력창에 포커스를 부여해 사용자가 추가버튼을 누른 후 다시 입력창에 문자를 입력할때 편리하게 해준다
    }
});
//addEventListener는 지정한 이벤트가 대상에 전달될 떄마다 호출할 함수를 설정한다


//+ HTML에 리스트 아이템 추가(addToList 함수 만들자)
function addToList(text){
//addToList함수에서는 새로 추가할 항목의 문자를 text라는 매개변수로 받아준다    
    const list = document.querySelector('#list');
    //html요소를 변수로 저장해준다
    const newListItem = document.createElement('li')
    //새로운 li요소를 만들어준다
    newListItem.classList.add('list-item');
    //list-item 클래스를 더해준다

    newListItem.innerHTML = text;
    //사용자 입력 문자를 li사이에 넣어준다

    list.appendChild(newListItem);
    //리스트에 새로만든 li를 추가

}

