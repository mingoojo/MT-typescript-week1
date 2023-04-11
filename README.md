# MT-typescript-week1

### react속 typescript사용법

간단히 REPL을 쓰고 싶다면 ts-node를 실행하면 된다.

,,,bash
npx ts-node
,,,

터미널 속에서 REPL을 사용가능!

### typescript 문법

타입이정

```bash
let name:string;
let age:number;
```

'name'이라는 변수는 스트링만 입력이 가능하고
'age'라는 변수는 숫자만 입력이 가능하다.

```bash
let human:{
    name:string;
    age:number;
}
```