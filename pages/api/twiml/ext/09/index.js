const VoiceResponse = require('twilio').twiml.VoiceResponse;

export default function handler(req, res) {
    const twiml = new VoiceResponse();

    if ([ '+447845171811'].includes(req.query.From)) {
        twiml.redirect({
            method: 'GET'
        }, '/api/twiml/ext/09/gather');
    } else {
        const gather = twiml.gather({
            input: 'dtmf',
            timeout: 20,
            finishOnKey: '#',
            action: '/api/twiml/ext/09/pin',
            method: 'GET'
        });
        gather.say({
            language: 'en-UK',
            voice: 'Google.en-GB-Neural2-B'
        }, 'It appears you are calling from an unregistered telephone number. Please dial your outbound calling PIN, followed by the hash key.');
    }

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}