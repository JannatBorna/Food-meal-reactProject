import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import blog from '../../images/blog/blog.png';
import blog1 from '../../images/blog/blog-1.jpg';
import blog2 from '../../images/blog/blog-2.jpg';
import blog3 from '../../images/blog/blog-3.jpg';
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import './Blog.css'

const Blog = () => {
    return (
        <div className="my-5" id='blog'>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="blog-top mb-5">
                            <img src={blog} alt="" />
                            <p>Barton waited twenty always repair in within we do. An delighted <br /> offending curiosity my is basswoods at. Boy prosperous increasing surrounded</p>
                        </div>
                    </Col>
                </Row>


            <Row>
                <Col lg={4} md={4} sm={12}>
                    <div className="blog">
                        <img src={blog1} alt="" />
                        <h4 className='mt-3'>Fast delivery <TbArrowBigRightLinesFilled className='blog-icon'/></h4>
                        <p className='mb-3'>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p><br />
                        <a href="/singleBlog">See more </a>
                    </div>
                </Col>

                <Col lg={4} md={4} sm={12}>
                    <div className="blog">
                        <img src={blog2} alt="" />
                        <h4 className='mt-3'>A good auto responder <TbArrowBigRightLinesFilled className='blog-icon'/></h4>
                        <p className='mb-3'>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p><br />
                        <a href="/singleBlog">See more</a>
                    </div>
                </Col>

                <Col lg={4} md={4} sm={12}>
                    <div className="blog">
                        <img src={blog3} alt="" />
                        <h4 className='mt-3'>Home delivery <TbArrowBigRightLinesFilled className='blog-icon'/></h4>
                        <p  className='mb-3'>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p><br />
                        <a href="/singleBlog">See more </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Blog;