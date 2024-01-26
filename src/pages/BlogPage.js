import React, { useState, useLayoutEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../components/Public.css';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

import SectionTitle from '../components/SectionTitle';
import ActionCard from '../components/ActionCard';

import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

function BlogPage(props) {
  const { setPage, blog_data } = props;
  const [article, setArticle] = useState();
  const theme = useTheme();

  const { id } = useParams();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setPage('blog');

    let data = blog_data[0]?.list.find((u) => u.article_id === id);
    if (data) {
      setArticle(data);
    } else {
      navigate('/blog');
    }
  }, [setPage, id, navigate, blog_data]);

  if (article) {
    return (
      <div style={{ paddingTop: '56px', minHeight: 'calc(100vh - 134px)' }}>
        <Grid container direction='column'>
          <Grid
            item
            className='home-banner'
            style={{
              paddingTop: '48px',
              paddingBottom: '48px',
            }}
          >
            <Container>
              <Grid container direction='row' gap={6}>
                <Grid item>
                  <img
                    src={article.image_path}
                    className='image-style-inside'
                    alt='cover'
                  />
                </Grid>
                <Grid item>
                  <Grid container direction='column' gap={6}>
                    <Grid item>
                      <SectionTitle
                        title={article.title}
                        subtitle={article.subtitle}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs style={{ paddingTop: '48px', paddingBottom: '48px' }}>
            <Container>
              <Grid container direction='column' gap={6}>
                <Grid item alignSelf='end'>
                  <div className='font-subbody color-fontsub'>
                    Publish {article.publish} | Latest Update {article.update}
                  </div>
                </Grid>
                {article.section_list?.map((data, index) => {
                  return (
                    <Grid item key={'section' + index}>
                      <Grid container direction='column' gap={3}>
                        {data.list.map((data, index) => {
                          if (data.type === 'text') {
                            return (
                              <Grid item key={'item' + index}>
                                <div
                                  className={
                                    data.color === 'main'
                                      ? 'font-subbody color-fontmain'
                                      : 'font-subbody color-fontsub'
                                  }
                                >
                                  {data.data}
                                </div>
                              </Grid>
                            );
                          } else if (data.type === 'text-bold') {
                            return (
                              <Grid item key={'item' + index}>
                                <div
                                  className={
                                    data.color === 'main'
                                      ? 'font-subbodybold color-fontmain'
                                      : 'font-subbodybold color-fontsub'
                                  }
                                >
                                  {data.data}
                                </div>
                              </Grid>
                            );
                          } else if (data.type === 'text-header') {
                            return (
                              <Grid item key={'item' + index}>
                                <div
                                  className={
                                    data.color === 'main'
                                      ? 'font-header color-fontmain'
                                      : 'font-header color-fontsub'
                                  }
                                >
                                  {data.data}
                                </div>
                              </Grid>
                            );
                          } else if (data.type === 'link') {
                            return (
                              <Grid item key={'item' + index}>
                                <Grid
                                  container
                                  direction='row'
                                  alignItems='center'
                                  gap={1}
                                >
                                  <Grid item>
                                    <LinkOutlinedIcon
                                      style={{
                                        color: theme.palette.primary.main,
                                        fontSize: '16px',
                                      }}
                                    />
                                  </Grid>
                                  <Grid item>
                                    <a
                                      className={
                                        data.color === 'main'
                                          ? 'font-subbody color-fontmain'
                                          : 'font-subbody color-fontsub'
                                      }
                                      style={{
                                        color: theme.palette.primary.main,
                                        textDecoration: 'none',
                                      }}
                                      href={data.path}
                                    >
                                      {data.data}
                                    </a>
                                  </Grid>
                                </Grid>
                              </Grid>
                            );
                          } else if (data.type === 'image') {
                            return (
                              <Grid item key={'item' + index}>
                                <img
                                  src={data.path}
                                  className='image-style-inside'
                                  alt=''
                                />
                              </Grid>
                            );
                          } else if (data.type === 'card') {
                            return (
                              <Grid item key={'item' + index}>
                                <Grid container spacing={3}>
                                  {data?.list.map((data, index) => {
                                    return (
                                      <Grid item xs={12} sm={4}>
                                        <ActionCard
                                          key={'card' + index}
                                          item_id={'card' + index}
                                          icon={data.icon}
                                          title={data.title}
                                          subtitle={data.subtitle}
                                        />
                                      </Grid>
                                    );
                                  })}
                                </Grid>
                              </Grid>
                            );
                          } else {
                            return undefined;
                          }
                        })}
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return null;
  }
}

export default BlogPage;
