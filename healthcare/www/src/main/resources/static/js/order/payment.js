
const payments = document.querySelector('#payments');
const selectPg = document.querySelector('#selectPg');

selectPg.addEventListener('change', e => {
    if(e.target.value == 'kakaopay'){
        pgVal = "kakaopay.TC0ONETIME";
        console.log(pgVal);
    } else if(e.target.value == 'tosspay'){
        pgVal = "tosspay.tosstest";
        console.log(pgVal);
    }
});
let pgVal;
    function requestPay(){
        const IMP = window.IMP;
        IMP.init('imp37747568');
        
        IMP.request_pay({
            pg: pgVal,
            pay_method: "card", // 생략가
            merchant_uid: "order_no_000234234", // 상점에서 생성한 고유 주문번호
            name: "주문명:결제테스트",
            amount: 1004,
            buyer_email: "test@portone.io",
            buyer_name: "구매자이름",
            buyer_tel: "010-1234-5678",
            buyer_addr: "서울특별시 강남구 삼성동",
            buyer_postcode: "123-456",
            m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}"
        }, function (rsp) { // callback 로직
            /* ...중략... */
        });

    }
