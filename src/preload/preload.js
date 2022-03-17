window.addEventListener('musickitloaded',  () => {
    const request = new XMLHttpRequest();

    console.log(window);
    function loadAlternateKey() {
        let parsedJson = JSON.parse(this.responseText)
        console.log(parsedJson.developerToken)
        // MusicKit.configure({
        //     developerToken: parsedJson.developerToken,
        //     app: {
        //         name: 'Apple Music',
        //         build: '1978.4.1',
        //         version: "1.0"
        //     },
        //     sourceType: 24,
        //     suppressErrorDialog: true
        // })
        setTimeout(() => {
            // app.init()
        }, 1000)
    }

    request.addEventListener("load", loadAlternateKey);
    request.open("GET", "https://raw.githubusercontent.com/lujjjh/LitoMusic/main/token.json");
    request.send();

// Music previews can be played without authorization:
//     await music.play();

// To play the full length of a song, check authorization before calling play():

    // await music.play();


// You should check authorization before accessing user's iCloud Music Library:
//     await music.authorize();
    // const result = await music.api.request('v1/me/library/albums');
// User's iCloud Music Library Albums
//     console.log(result.data.data);
})
