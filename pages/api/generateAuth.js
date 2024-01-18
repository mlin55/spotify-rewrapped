'use server'

export default async function handler(req, res) {
    global.codeVerifier = generateRandomString(64)
    const hashed = await sha256(codeVerifier);
    const codeChallenge = base64encode(hashed);
    const authUrl = new URL("https://accounts.spotify.com/authorize")

    const params = new URLSearchParams();
    params.append("client_id", process.env.NEXT_PUBLIC_CLIENT_ID);
    params.append("response_type", "code");
    params.append("redirect_uri", process.env.NEXT_PUBLIC_CALLBACK_URL);
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", codeChallenge);

    authUrl.search = new URLSearchParams(params).toString();

    res.status(200).json({url: authUrl})
}

const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

const sha256 = async (plain) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return crypto.subtle.digest('SHA-256', data)
}

const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}