import React, { useState } from 'react';
import "./latestArticle.css";
import { articles } from '../../data/articles';
import ReactPaginate from 'react-paginate';

function LatestArticle() {

    const [articlesData] = useState(articles);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = articlesData.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = ({ selected }) => {
        setCurrentPage(selected + 1);
    }

    return (
        <div className='latest-article-div'>
            <h1 className='article-heading article-head'>Latest Article</h1>
            <div className='article-container'>
                {
                    currentPosts.map((currentPost) => {
                        const { id, title, content, image } = currentPost
                        return (
                            <div className='article-div' key={id}>
                                <div className='article-img'>
                                    <img src={image} alt={title} className='article-img' />
                                </div>
                                <div className='article-contents'>
                                    <h3 className="article-heading">{title}</h3>
                                    <p className='article-content'>{content}</p>
                                </div>
                                <div className='readmore-btn-div'>
                                    <button className='article-readmore-btn'>Read More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <ReactPaginate
                onPageChange={paginate}
                pageCount={Math.ceil(articlesData.length / postsPerPage)}
                previousLabel={'Prev'}
                nextLabel={'Next'}
                containerClassName={'pagination'}
                pageLinkClassName={'page-number'}
                previousLinkClassName={'prev-page'}
                nextLinkClassName={'next-page'}
                activeLinkClassName={'active'}
            />
        </div>
    )
}

export default LatestArticle
