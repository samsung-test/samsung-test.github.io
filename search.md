---
layout: search
title: Search
sitemap: false
landing: true
notoc: true
notags: true
permalink: search.html
---

<div class="wrapper space">
	<p><span id="search-process">Loading</span> results <span id="search-query-container" style="display: none;">for "<strong id="search-query"></strong>"</span></p>
	<ul id="search-results"></ul>
</div>
<script>
	window.data = {
		{% for post in site.pages %}
			{% if post.title %}
				{% unless post.excluded_in_search %}
					{% if added %},{% endif %}
					{% assign added = false %}
					"{{ post.url | slugify | remove_first: " / " }}": {
						"id": "{{ post.url | slugify }}",
						"title": "{{ post.title | xml_escape }}",
						"categories": "{{ post.categories | join: ", " | xml_escape }}",
						"url": " {{ post.url | remove_first: "/" | xml_escape }}",
						"content": {{ post.content | strip_html | replace_regex: "[\s/\n]+"," " | strip | jsonify }}
					}
					{% assign added = true %}
				{% endunless %}
			{% endif %}
		{% endfor %}
	};
</script>
<script src="/js/lunr.min.js"></script>
<script src="/js/search.js"></script>