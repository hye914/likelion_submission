
import React from 'react';

const Content_Nomad = () => {
  return (
    <div>
        <h2>Hook</h2>
        <p>클래스형이 아니고 함수형으로 state를 관리할 수 있도록 도와준다 
            함수형으로 작성하면 컴퍼넌트를 더 짧은 코드로 관리할 수 있다는 이점이 있다.
        </p>
        <h2>Hook-useState</h2>
        <p>: 기본 문법은 Const[items,setItem]=useState(1)이다. return에서 item의 형식으로 상태를 반환할 수 있다.
        화살표 함수와 함께 쓰면 유용하다. const incrementItem=()=> setItem(item+1)처럼 말이다.</p>
        <h2>useInput</h2>
        <p>name은 value값과 onChange함수를 리턴한다. useInput은 name을 return 하고 name과 value가 같아져 value=name.value가 된다. </p>
        <p>[...name]은 value [name.value]와 onChange=[name.onChange]를 모두 포함하고 있다 </p>
        <h2>useTabs</h2>
        <p>배열로 만든 tab의 content를 가져다 준다. </p>
        <p>currentItem과 changeItem 모두를 리턴시키는 함수이다.</p>
        <p>클릭한 tab의 값으로 re-render된다.</p>
        <h2>useEffect</h2>
        <p>생의 주기를 관리해주는 함수이다.</p>
        <p>useEffect는 didmount,didupdate의 역할을 하여 새로 고침하면 콘솔로그를 찍어줌</p>
        <p>useEffect는 곧 didMount, willUnMount, didUpdate라고 보면 된다</p>
        <h2>useTitle</h2>
        <p>문서의 제목을 업데이트해주는 hook이다</p>
        <p>setTitle을 리턴한다.</p>
        <p>title이 업데이트 되면 해당 훅이 업데이트 되면서 바뀌게 된다.</p>
        <h2>useClick</h2>
        <p>referen란 컴포넌트의 특정 부분을 선택할 수 있는 것</p>
        <p>useClick은 레퍼런스를 만들어주고 같은 레퍼런스를 return할 수 있게 한다.</p>
        
    </div>
  );
};

export default Content_Nomad;
