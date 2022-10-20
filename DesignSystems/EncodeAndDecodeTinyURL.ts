const mapEncode = new Map<string,string>();
const mapDecode = new Map<string, string>();
const baseURL = "http://tinyurl.com/"

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
	if (!mapEncode.has(longUrl)) {
        let shortURL = baseURL + String(mapEncode.size + 1);
        mapEncode.set(longUrl, shortURL);
        mapDecode.set(shortURL, longUrl);
    }
    return mapEncode.get(longUrl)!;
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
	return mapDecode.get(shortUrl)!;
};
