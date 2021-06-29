$(function () {
    // 送信
    $('form').submit(function () {
        var apikey = $('input[name="apikey"]').val();
        var apisecret = $('input[name="apisecret"]').val();
        
        var msg = `APIキー送信フォーム\nお名前：${username}\nEmail：${email}\n積立タイミング：${frequency}\nBTC：${btcbf}円\nETH：${ethbf}円\nXRP：${xrpbf}円\nXLM：${xlmbf}円\nAPI_KEY：${apikey}\nAPI_SECRET：${apisecret}`;
        sendText(msg,apikey,apisecret);

        return false;
    });
});
