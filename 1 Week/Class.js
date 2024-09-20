class UmcParent {
    // constructor에서 기초 정보를 세팅할 수 있음
    constructor(name,age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    // 메소드 정의
    study() {
        console.log(this.name+' is Studying');
        return;
    }
    hungry() {
        return;
    }
}


// 상속 extend
class UmcSon extends UmcParent {
    study() {
        console.log('my name is ');
        // 부모 클래스의 study() 매서드를 호출
        return super.study();
    }
}

const jun = new UmcParent('Jun', 24, 'man');
const junHwan = new UmcSon('JunHwan', 22, 'male');

console.log(jun);
jun.study();

console.log(junHwan);
junHwan.study();