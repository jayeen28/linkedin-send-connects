/**
 * Step 1: Search on linked in.
 * Step 2: Navigate to the people section and click "See all people results" button.
 * Step 3: Open browser console and run the code below. It will continue until it reaches the max connection limit.
 * 
 * If something goes wrong please open a issue explaining the problem.
 */

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}
function checker(e) {
    return (e.textContent || '').trim().toLowerCase().includes('connect');
}

const buttons = Array.from(document.getElementsByTagName('button')).filter(checker);

async function main(buttons) {
    for (let button of buttons) {
        button.click();
        await sleep(3000);
        const sendWithOutNoteButton = document.querySelector("[aria-label='Send without a note']");
        if (sendWithOutNoteButton) sendWithOutNoteButton.click();
        else continue;
        await sleep(5000);
    }

    console.log('Done sending all connectes in this page.');
    const nextButton = document.querySelector("[aria-label='Next']");
    if (nextButton) {
        nextButton.click();
        await sleep(20000);
        const newButtons = Array.from(document.getElementsByTagName('button')).filter(checker);
        main(newButtons);
    }

}

main(buttons);