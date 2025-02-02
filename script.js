document.getElementById('jokeForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const jokeInput = document.getElementById('jokeInput').value.trim();
    if (jokeInput) {
        generateJokes(jokeInput);
    }
});

function generateJokes(topic) {
    document.getElementById('responseContainer').style.display = 'block';
    document.getElementById('votingContainer').style.display = 'none';

    document.getElementById('llama-response').innerText = `Llama's joke about "${topic}" is loading...`;
    document.getElementById('gemini-response').innerText = `Gemini's joke about "${topic}" is loading...`;

    setTimeout(() => {
        document.getElementById('llama-response').innerText = `Why did ${topic} cross the road? To get to the punchline! 😂`;
        document.getElementById('gemini-response').innerText = `What do you call a ${topic} that tells jokes? A pun-demic! 🤣`;
        document.getElementById('votingContainer').style.display = 'block';
    }, 1000);
}

function voteForJoke(vote) {
    const result = document.getElementById('matchResult');
    result.textContent = `You voted for ${vote === 'llama' ? "Llama's" : "Gemini's"} joke! 🎉`;
}
