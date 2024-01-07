// $(window).on('load', function() {

//     $('.level-bar-inner').each(function() {
    
//         var itemWidth = $(this).data('level');
        
//         $(this).animate({
//             width: itemWidth
//         }, 800);
        
//     });

// });

function parseRSS(url, callback) {
	const parser = new RSSParser();

	// CORS_PROXY is for development only
	const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
	var currentHost = window.location.host;

	const finalURL = (currentHost === '' || /^localhost(:\d+)?$/.test(currentHost)) ? CORS_PROXY + url : url;
	parser.parseURL( finalURL, function(err, feed) {
			if (err) {
			console.error('Error parsing RSS feed:', err);
			} else {
			callback(feed.items);
			}
	});
}

function extractSnippet(content, length) {
	// Use regex to match the text up to the specified length
	const snippet = content.match(new RegExp(`^.{0,${length}}[\\S]*`))[0];
	return snippet;
}

// Function to display blog posts in the specified div
function displayBlogPosts(posts, displayCount = 0) {
	const blogPostsDiv = document.getElementById('rss-feeds');

	// Clear any existing content in the div
	blogPostsDiv.innerHTML = '';

	// Check displayCount, if 0, display all posts.
	var postsToDisplay = (displayCount <= 0) ? posts : posts.slice(0, displayCount)

	// Create and append HTML elements for each blog post
	postsToDisplay.forEach(post => {
			const postElement = document.createElement('div');
			postElement.innerHTML = `
			<h4><a href="${post.link}" target="_blank">${post.title}</a></h4>
			<p>${extractSnippet(post['content:encodedSnippet'], 200)} ...<i>(<a href="${post.link}" target="_blank">continue reading</a>)</i></p>
			<p>Published on: ${new Date(post.pubDate).toLocaleDateString()}</p>
			<hr>
			`;
			blogPostsDiv.appendChild(postElement);
	});
}

// Example usage
const rssFeedUrl = 'https://medium.com/feed/@yogisaputro';
const POSTS_TO_DISPLAY = 3;

parseRSS(rssFeedUrl, function(posts) {
	// Display the parsed blog posts in the specified div
	displayBlogPosts(posts, POSTS_TO_DISPLAY);
});