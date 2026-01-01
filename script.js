// script.js

// Floating hearts creation
function createHearts() {
    const container = document.getElementById('heartsContainer');
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.innerHTML = '❤';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 15}s`;
        heart.style.fontSize = `${Math.random() * 15 + 10}px`;
        container.appendChild(heart);
    }
}

// AI Responses with Ahmet & Berra integration
const aiResponses = {
    greetings: [
        "Ahmet ve Berra'nın harika enerjisiyle size merhaba diyorum! Bugün size nasıl yardımcı olabilirim?",
        "Ahmet'in pozitifliği ve Berra'nın neşesi bana da geçti sanırım! Sizin için buradayım, sorunuz nedir?",
        "Ahmet ve Berra gibi birbirini tamamlayan iki harika insandan ilham alarak tasarlandım! Size nasıl yardım edebilirim?"
    ],
    math: [
        "Ahmet'in analitik zekası ve Berra'nın detaycılığı matematik konusunda mükemmel bir ikili oluşturur! Sorumuza gelelim: ",
        "Ahmet ve Berra matematik problemlerini birlikte çözerken çok keyif alırlar. Ben de size şöyle açıklayayım: ",
        "Matematik, Ahmet'in mantıksal yaklaşımı ve Berra'nın yaratıcılığı ile birleşince harikalar yaratır! Konumuza dönelim: "
    ],
    history: [
        "Ahmet ve Berra tarihi yerleri gezmeyi çok severler. Tarih bilgilerini paylaşırken onların bu merakını düşünmeden edemiyorum! ",
        "Tarih, Ahmet'in araştırmacılığı ve Berra'nın hikaye anlatıcılığı ile hayat bulur. İşte size tarihi bir bilgi: ",
        "Ahmet ve Berra gibi tarihte de uyumlu ikililer vardır. Size tarihten bir kesit sunayım: "
    ],
    general: [
        "Ahmet'in geniş bilgi birikimi ve Berra'nın kültürel ilgileri sayesinde bu konuda size harika bilgiler verebilirim! ",
        "Ahmet ve Berra sohbetlerinde hep yeni şeyler öğrenirler. Size de ilginç bir genel kültür bilgisi vereyim: ",
        "Genel kültür, Ahmet ve Berra'nın sohbetlerinin vazgeçilmezidir. İşte size ilginç bir bilgi: "
    ],
    ahmetBerra: [
        "Ahmet ve Berra mükemmel bir ikili! Birbirlerini nasıl da tamamlıyorlar, değil mi?",
        "Ahmet'in sakin ve mantıklı yaklaşımı, Berra'nın enerjik ve yaratıcı kişiliğiyle birleşince ortaya harika bir uyum çıkıyor.",
        "Ahmet ve Berra'nın birlikteliği, uyumun ve karşılıklı saygının en güzel örneklerinden biri.",
        "Ahmet ve Berra birlikteyken her zorluğun üstesinden gelebileceklerini gösteriyorlar.",
        "Ahmet'in desteği ve Berra'nın cesareti, birlikte harika işler başarmalarını sağlıyor."
    ],
    default: [
        "Ahmet ve Berra'nın iletişim gücünden ilham alarak size şöyle cevap vereyim: ",
        "Ahmet'in sabrı ve Berra'nın anlayışı gibi, ben de size en doğru bilgiyi vermeye çalışıyorum: ",
        "Ahmet ve Berra gibi uyumlu bir ikiliden öğrendiğim kadarıyla, size şöyle açıklayabilirim: "
    ]
};

// Knowledge database
const knowledgeBase = {
    matematik: {
        "pisagor": "Pisagor teoremi: Bir dik üçgende hipotenüsün karesi, dik kenarların kareleri toplamına eşittir. (a² + b² = c²). Ahmet ve Berra gibi iki kenar birleşince hipotenüs gibi mükemmel bir sonuç ortaya çıkar!",
        "integral": "Integral, bir fonksiyonun eğrisi altında kalan alanı hesaplama yöntemidir. Tıpkı Ahmet ve Berra'nın ilişkisi gibi - zamanla biriken güzel anıların toplamı!",
        "türev": "Türev, bir fonksiyonun değişim oranını ölçer. Ahmet ve Berra'nın birbirlerine olan etkileri gibi, anlık değişimleri gösterir.",
        "asal sayı": "Asal sayılar sadece 1'e ve kendisine bölünebilen sayılardır. Tıpkı Ahmet ve Berra'nın ilişkisi gibi - sadece birbirlerine bölünebilirler!",
        "pi sayısı": "π (pi) sayısı yaklaşık 3.14159'dur ve daire çevresinin çapına oranıdır. Ahmet ve Berra'nın uyumu gibi sonsuza kadar devam eden bir sayı!"
    },
    tarih: {
        "osmanlı": "Osmanlı İmparatorluğu 1299-1922 yılları arasında varlığını sürdürmüştür. Ahmet ve Berra gibi güçlü bir temel üzerine kurulmuş ve uzun süre ayakta kalmıştır.",
        "cumhuriyet": "Türkiye Cumhuriyeti 29 Ekim 1923'te Mustafa Kemal Atatürk önderliğinde kuruldu. Ahmet ve Berra'nın birlikteliği gibi modern ve ileriye dönük bir yapı!",
        "istanbul": "İstanbul, 1453'te Fatih Sultan Mehmet tarafından fethedildi. Ahmet ve Berra'nın keşfettiği gibi, tarih ve modern yaşamın buluştuğu harika bir şehir!",
        "çanakkale": "Çanakkale Savaşı 1915-1916 yıllarında gerçekleşti ve Türk tarihinin en önemli zaferlerinden biridir. Ahmet ve Berra gibi birlik ve beraberliğin zaferi!"
    },
    genel: {
        "uzay": "Evren yaklaşık 13.8 milyar yaşındadır. Ahmet ve Berra'nın keşfedeceği gibi sonsuz bir merak kaynağı!",
        "okyanus": "Dünya yüzeyinin %71'i okyanuslarla kaplıdır. Tıpkı Ahmet ve Berra'nın duygusal derinliği gibi keşfedilmeyi bekleyen engin bir dünya!",
        "müzik": "Müzik evrensel bir dildir. Ahmet ve Berra gibi farklı notaların uyum içinde birleşmesiyle güzelleşir.",
        "sanat": "Sanat, duyguların ifade biçimidir. Ahmet'in anlayışı ve Berra'nın yaratıcılığı bir araya geldiğinde ortaya harika sanat eserleri çıkar!"
    }
};

// DOM Elements
const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const typingIndicator = document.getElementById('typingIndicator');

// Initialize
createHearts();

// Add message to chat
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    
    const messageHeader = document.createElement('div');
    messageHeader.className = 'message-header';
    
    if (isUser) {
        messageHeader.innerHTML = `
            <div class="user-icon"><i class="fas fa-user"></i></div>
            <div>Siz</div>
        `;
    } else {
        messageHeader.innerHTML = `
            <div class="ai-icon"><i class="fas fa-brain"></i></div>
            <div>Ahmet & Berra AI</div>
        `;
    }
    
    messageDiv.appendChild(messageHeader);
    messageDiv.appendChild(document.createTextNode(message));
    chatContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Show typing indicator
function showTyping() {
    typingIndicator.style.display = 'flex';
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Hide typing indicator
function hideTyping() {
    typingIndicator.style.display = 'none';
}

// Get random response from category
function getRandomResponse(category) {
    const responses = aiResponses[category];
    return responses[Math.floor(Math.random() * responses.length)];
}

// Generate AI response
function generateAIResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    
    // Check for Ahmet & Berra mentions
    if (userMessage.includes('ahmet') || userMessage.includes('berra')) {
        return getRandomResponse('ahmetBerra');
    }
    
    // Check for math keywords
    if (userMessage.includes('matematik') || userMessage.includes('mat') || 
        userMessage.includes('sayı') || userMessage.includes('hesap') ||
        userMessage.includes('pisagor') || userMessage.includes('integral') ||
        userMessage.includes('türev') || userMessage.includes('asal')) {
        
        let mathResponse = getRandomResponse('math');
        
        // Add specific knowledge if available
        for (const key in knowledgeBase.matematik) {
            if (userMessage.includes(key)) {
                mathResponse += " " + knowledgeBase.matematik[key];
                return mathResponse;
            }
        }
        
        return mathResponse + " Size hangi matematik konusunda yardımcı olabilirim?";
    }
    
    // Check for history keywords
    if (userMessage.includes('tarih') || userMessage.includes('osmanlı') || 
        userMessage.includes('cumhuriyet') || userMessage.includes('savaş') ||
        userMessage.includes('fetih') || userMessage.includes('atatürk')) {
        
        let historyResponse = getRandomResponse('history');
        
        // Add specific knowledge if available
        for (const key in knowledgeBase.tarih) {
            if (userMessage.includes(key)) {
                historyResponse += " " + knowledgeBase.tarih[key];
                return historyResponse;
            }
        }
        
        return historyResponse + " Hangi tarih konusunda bilgi almak istersiniz?";
    }
    
    // Check for general knowledge
    if (userMessage.includes('genel') || userMessage.includes('kültür') ||
        userMessage.includes('bilgi') || userMessage.includes('ilginç') ||
        userMessage.includes('uzay') || userMessage.includes('okyanus') ||
        userMessage.includes('müzik') || userMessage.includes('sanat')) {
        
        let generalResponse = getRandomResponse('general');
        
        // Add specific knowledge if available
        for (const key in knowledgeBase.genel) {
            if (userMessage.includes(key)) {
                generalResponse += " " + knowledgeBase.genel[key];
                return generalResponse;
            }
        }
        
        return generalResponse + " Hangi konuda genel kültür bilgisi istersiniz?";
    }
    
    // Check for greetings
    if (userMessage.includes('merhaba') || userMessage.includes('selam') || 
        userMessage.includes('naber') || userMessage.includes('nasılsın') ||
        userMessage.includes('hi') || userMessage.includes('hello')) {
        return getRandomResponse('greetings');
    }
    
    // Default response
    return getRandomResponse('default') + " Lütfen sorunuzu daha detaylı belirtir misiniz? Ahmet ve Berra hakkında da konuşabiliriz!";
}

// Handle user message
function handleUserMessage() {
    const message = userInput.value.trim();
    if (message === '') return;
    
    // Add user message
    addMessage(message, true);
    userInput.value = '';
    
    // Show typing indicator
    showTyping();
    
    // Generate and add AI response after delay
    setTimeout(() => {
        hideTyping();
        const aiResponse = generateAIResponse(message);
        addMessage(aiResponse);
    }, 1500 + Math.random() * 1000);
}

// Quick question buttons
function quickQuestion(type) {
    let question = '';
    switch(type) {
        case 'matematik':
            question = "Matematikte integral konusunu açıklar mısın?";
            break;
        case 'tarih':
            question = "Osmanlı İmparatorluğu hakkında bilgi verir misin?";
            break;
        case 'genel kültür':
            question = "Uzay hakkında ilginç bir bilgi paylaşır mısın?";
            break;
        case 'ahmet berra':
            question = "Ahmet ve Berra hakkında ne düşünüyorsun?";
            break;
    }
    
    userInput.value = question;
    handleUserMessage();
}

// Event listeners
sendBtn.addEventListener('click', handleUserMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleUserMessage();
});

// Initial greeting
setTimeout(() => {
    addMessage("Ahmet ve Berra'nın dünyasına hoş geldiniz! Bugün size nasıl yardımcı olabilirim? Matematik, tarih, genel kültür veya Ahmet ve Berra hakkında konuşalım! 💫");
}, 1000);
