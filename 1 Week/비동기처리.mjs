// JS는 기본적으로 싱글스레드 기반 -> 일을 한번 밖에 처리 못함
// 일일이 처리하게 되면 일의 효율이 떨어지므로 "비동기"를 사용
// 직렬이 아닌 병렬적으로 처리

/** 처리 방식
 * 1. 콜백 함수 
 *        매개변수로 함수를 넣어 함수를 실행
 *             하지만 콜백함수를 중첩되면 코드가 난해해짐
 *             -> Promise 객체로 해결
 * 2. Promise 객체와 Promise chaining
 *        pending(초기 상태) ,fulfilled(이행), rejected(연산이 실패 중)
 */



import fs from 'fs/promises';

function readFilePromise(filePath) {
  return fs.readFile(filePath, 'utf8');
}

function writeFilePromise(filePath, data) {
  return fs.writeFile(filePath, data, 'utf8');
}
// 비동기적 작업을 수행할 함수 앞에 async 키워드를 붙인다.
// 이 함수안에서 비동기 처리를 할거야! 하고 선언하는 겁니다.
async function processFiles() {
// 코드 진행 방식은 try문 내에서 계속 진행하다 
// err가 발생하면 catch로 이 에러를 잡아서 적절한 에러 처리를 해주는 방식입니다.
  try {
	  // 그 함수 내에서 비동기로 처리할 일 앞에 await 키워드를 붙여서 아래와 같이 사용합니다.
	  // 프로미스 객체가 반환될 때까지 기다려라! 라는 뜻입니다.
    const data = await readFilePromise('test.txt');
    console.log('파일 내용:', data);

    const modifiedData = data + '\n새로운 내용 추가';
    await writeFilePromise('modifiedTest.txt', modifiedData);
    console.log('수정된 파일이 성공적으로 저장되었습니다.');

    const newData = await readFilePromise('modifiedTest.txt');
    console.log('수정된 파일 내용:', newData);
  } catch (err) {
    console.error('오류 발생:', err);
  }
}

processFiles();
  