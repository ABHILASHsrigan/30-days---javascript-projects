const quotes = [
    { text: "Mess with me? I’ll let karma do the rest", author: "Anonymous" },
    { text: "If you kick me when I’m down, you better pray I don’t get up", author: "Anonymous" },
    { text: "Haters are the fuel. Pressure builds the beast", author: "thug" },
    { text: "You don’t know my struggle, so don’t judge my hustle", author: "mcstan" },
    { text: "I’d rather fight and bleed than beg and plead.", author: "Anonymous" },
    { text: "Built from pain. Trained by struggle. Ready for war", author: "lilwane" },
    { text: "Don’t fear the fighter who talks. Fear the one who stays quiet and strikes hard.", author: "snoopdog" }
  ];
  
  let index = 0;
  const quoteText = document.getElementById('quoteText');
  const quoteAuthor = document.getElementById('quoteAuthor');
  const quoteBox = document.getElementById('quoteBox');
  
  function showQuote(i) {
  //  animation applied here to fade out referecnce from ai tools
    quoteBox.style.opacity = '0';
    quoteBox.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
    
      quoteText.textContent = `"${quotes[i].text}"`;
      quoteAuthor.textContent = `— ${quotes[i].author}`;
  
     
      quoteText.classList.remove('quote-text');
      quoteAuthor.classList.remove('quote-author');
  
      void quoteText.offsetWidth; 
      void quoteAuthor.offsetWidth;
  
      quoteText.classList.add('quote-text');
      quoteAuthor.classList.add('quote-author');
  
      // applied here to Animate fade in referecnce from ai tools
      quoteBox.style.opacity = '1';
      quoteBox.style.transform = 'scale(1)';
    }, 300);
  }
  
  function nextQuote() {
    index = (index + 1) % quotes.length;
    showQuote(index);
  }
  
  function prevQuote() {
    index = (index - 1 + quotes.length) % quotes.length;
    showQuote(index);
  }
  // 8sec to chgange slides randomly
  setInterval(nextQuote, 8000);
  
  
  showQuote(index);
  