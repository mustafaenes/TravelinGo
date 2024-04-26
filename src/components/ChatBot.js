import React, { useState, useEffect } from 'react';
import { Grid, TextField, Typography, Paper, IconButton, Accordion, AccordionSummary, AccordionDetails, Avatar } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    // Hoşgeldiniz mesajını gönder
    useEffect(() => {
        setMessages([{ sender: 'bot', content: 'Hoşgeldiniz! Size nasıl yardımcı olabilirim 😀' }]);
    }, []);

    const sendMessage = () => {
        if (inputValue.trim() !== '') {
            const newMessage = {
                sender: 'user',
                content: inputValue
            };
            setMessages([...messages, newMessage]);
            setInputValue('');
            // Burada chatbot'un cevap vereceği bir fonksiyon çağırılabilir
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    const toggleChatbot = () => {
        setIsChatbotOpen(!isChatbotOpen);
    };

    return (
        <Accordion expanded={isChatbotOpen} onChange={toggleChatbot} sx={{ backgroundColor: 'ButtonShadow' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Gezi Yolunda ChatBot</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div style={{ height: 300, overflowY: 'auto', marginBottom: 10 }}>
                    {messages.map((message, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start', marginBottom: 10 }}>
                            {message.sender !== 'user' && <Avatar src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${message.content}&flip=true&scale=120&radius=20&backgroundType=gradientLinear,solid&glassesProbability=25&backgroundColor=d1d4f9,b6e3f4`} alt="Bot Avatar" style={{ marginRight: '10px' }} />}
                            <Typography variant="body1" style={{ marginRight: message.sender === 'user' ? '10px' : '0', marginLeft: message.sender === 'user' ? '0' : '10px', padding: '10px', borderRadius: '10px', backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#E0E0E0', alignSelf: 'flex-start' }}>
                                {message.content}
                            </Typography>
                            {message.sender === 'user' && <Avatar src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${message.content}&flip=true&scale=120&radius=20&backgroundType=gradientLinear,solid&glassesProbability=25&backgroundColor=d1d4f9,b6e3f4`} alt="User Avatar" style={{ marginLeft: '10px' }} />}
                        </div>
                    ))}
                </div>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item xs={11}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Mesajınızı yazın..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={sendMessage} style={{ backgroundColor: '#4CAF50', color: 'white' }}>
                            <SendIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
}

export default ChatBot;
