import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import { htmlToReact, withPrefix, markdownify } from '../utils';

export default class Post extends React.Component {
    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const subtitle = _.get(page, 'subtitle');
        const image = _.get(page, 'content_img_path');
        const imageAlt = _.get(page, 'content_img_alt', '');
        const date = _.get(page, 'date');
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:%M');
        const formattedDate = moment(date).strftime('%A, %B %e, %Y');
        const markdownContent = _.get(page, 'markdown_content');

        return (
            <Layout page={page} config={config}>
                <article className="post post-full">
                    <header className="post-header inner-sm">
                        <h1 className="post-title underline">{title}</h1>
                        {subtitle && <div className="post-subtitle">{htmlToReact(subtitle)}</div>}
                    </header>
                    {image && (
                        <div className="post-image">
                            <img src={withPrefix(image)} alt={imageAlt} />
                        </div>
                    )}
                    
                    <iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=48&l=ur1&category=smp&banner=1CNSA26KEPD6AEPR7QG2&f=ifr&linkID={{link_id}}&t=n0bisuke-22&tracking_id=n0bisuke-22" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>

                    {markdownContent && <div className="post-content inner-sm">{markdownify(markdownContent)}</div>}
                    <footer className="post-meta inner-sm">
                        <time className="published" dateTime={dateTimeAttr}>{formattedDate}</time>
                    </footer>
                </article>
            </Layout>
        );
    }
}
