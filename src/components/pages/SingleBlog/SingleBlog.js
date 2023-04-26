import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import single1 from '../../images/blog/single-blog-1.jpg';
import single2 from '../../images/blog/single-blog-2.jpg';
import single3 from '../../images/blog/single-blog-3.jpg';
import single4 from '../../images/blog/single-blog-4.jpg';
import './SingleBlog.css';

const SingleBlog = () => {
    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className='single-blog'>
                            <img src={single2} alt="" />
                        </div>
                        <div className='single-text'>
                           <p><span>C</span> ook the wonton. Bring a large pot of water up to a boil. When at a rapid boil, gently drop in the wonton and stir to stop them from sticking to the bottom of the pot. The wonton will sink down at first and then start to float as the water comes back up to a boil and they are cooked through. Take one and cut it open to make sure, then scoop out all of the cooked wonton.</p>
                           <h5>Wonton soup has long been one of my favorite foods.</h5>
                            <p>I loved eating wonton wrappers, more so the the wonton filling, 
                            and my wonton would be 10 percent meat and 90 percent wrapper. They 
                            didn’t look anything like the wonton we would order by the bowlfuls 
                            on the weekends at our local wonton congee noodle restaurant, but I 
                            loved making those misshapen, wonky wontons.</p>
                            <p>How did we ever manage to cook before the arrival of the internet? I suppose we had to rely on cookbooks, cooking tv shows, and knowledge handed down from our grandmothers. Of course, the more daring would experiment in the kitchen, remembering the successes, and mercifully forgetting any culinary disasters.</p>
                        </div>
                        <div className='single-blog'>
                            <img src={single1} alt="" />
                        </div>
                        <div className='single-text'>
                           <p><b fs-1>It</b> was one of the only things I ate as small child 
                            and I have many fond memories of my small self, kneeling on a chair 
                            at our round laminate kitchen table   meticulously wrapping wonton 
                            for dinner. I would always make the wonton extra tiny.</p>
                            <p>Protein. Wontons are a meat based dumpling, so it’s best to use a protein with some fat in it so the filling stays juicy and fluffy after cooking. This is why pork is so popular. Ground pork has just enough fat to protein ratio. Adding in some bouncy shrimp is a pro move because they add some textural contrast. That being said, you can use any ground meat you like (or even tofu), just know that your wonton will probably be a bit more dense if you’re using extra lean meat.</p>
                            <p>I loved eating wonton wrappers, more so the the wonton filling, 
                            and my wonton would be 10 percent meat and 90 percent wrapper. They 
                            didn’t look anything like the wonton we would order by the bowlfuls 
                            on the weekends at our local wonton congee noodle restaurant, but I 
                            loved making those misshapen, wonky wontons.</p>
                        </div>
                        <div className='single-blog'>
                            <img src={single3} alt="" />
                        </div>
                        <div className='single-text'>
                           <p><b fs-1>It</b> was one of the only things I ate as small child 
                            and I have many fond memories of my small self, kneeling on a chair 
                            at our round laminate kitchen table   meticulously wrapping wonton 
                            for dinner. I would always make the wonton extra tiny.</p>
                            <p>Protein. Wontons are a meat based dumpling, so it’s best to use a protein with some fat in it so the filling stays juicy and fluffy after cooking. This is why pork is so popular. Ground pork has just enough fat to protein ratio. Adding in some bouncy shrimp is a pro move because they add some textural contrast. That being said, you can use any ground meat you like (or even tofu), just know that your wonton will probably be a bit more dense if you’re using extra lean meat.</p>
                            <p>I loved eating wonton wrappers, more so the the wonton filling, 
                            and my wonton would be 10 percent meat and 90 percent wrapper. They 
                            didn’t look anything like the wonton we would order by the bowlfuls 
                            on the weekends at our local wonton congee noodle restaurant, but I 
                            loved making those misshapen, wonky wontons.</p>
                        </div>
                        <div className='single-blog'>
                            <img src={single4} alt="" />
                        </div>
                        <div className='single-text'>
                           <p><b fs-1>It</b> was one of the only things I ate as small child 
                            and I have many fond memories of my small self, kneeling on a chair 
                            at our round laminate kitchen table   meticulously wrapping wonton 
                            for dinner. I would always make the wonton extra tiny.</p>
                            <p>Protein. Wontons are a meat based dumpling, so it’s best to use a protein with some fat in it so the filling stays juicy and fluffy after cooking. This is why pork is so popular. Ground pork has just enough fat to protein ratio. Adding in some bouncy shrimp is a pro move because they add some textural contrast. That being said, you can use any ground meat you like (or even tofu), just know that your wonton will probably be a bit more dense if you’re using extra lean meat.</p>
                            <p>I loved eating wonton wrappers, more so the the wonton filling, 
                            and my wonton would be 10 percent meat and 90 percent wrapper. They 
                            didn’t look anything like the wonton we would order by the bowlfuls 
                            on the weekends at our local wonton congee noodle restaurant, but I 
                            loved making those misshapen, wonky wontons.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleBlog;