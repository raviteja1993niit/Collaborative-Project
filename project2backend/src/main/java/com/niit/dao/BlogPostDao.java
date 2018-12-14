package com.niit.dao;

import java.util.List;

import com.niit.models.BlogPost;

public interface BlogPostDao {
void addBlogPost(BlogPost blogPost);
List<BlogPost> getBlogsWaitingForApproval();
List<BlogPost> getBlogsApproved();
BlogPost getBlog(int blogId);
}