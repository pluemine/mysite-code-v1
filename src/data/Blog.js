import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export const blog_data = [
  {
    data: [
      {
        title: 'Blog',
        subtitle:
          'Welcome to my blog. I am passionate about sharing my knowledge on various topics. Whether you are looking for tips, insights, or inspiration, you will find something useful and interesting here. Thank you for visiting!',
      },
    ],
    list: [
      {
        article_id: 'introduction-to-etf',
        image_path: '/blog/introduction-to-etf/cover.png',
        title: 'Introduction to ETF',
        subtitle:
          'If you are looking for a simple and effective way to invest in the stock market, you might want to consider index ETFs. By investing in index ETFs, you can gain exposure to a diversified portfolio of stocks that represent the overall market or a particular sector.',
        description:
          'If you are looking for a simple and effective way to invest in the stock market, you might want to consider index ETFs. By investing in index ETFs, you can gain exposure to a diversified portfolio of stocks that represent the overall market or a particular sector.',
        tag: ['Introduction', 'Financial', 'Investing', 'ETF'],
        publish: '18/01/2024',
        update: '18/01/2024',
        section_list: [
          {
            section: '1',
            list: [
              { type: 'text-header', color: 'main', data: 'What is ETF' },
              {
                type: 'text',
                color: 'sub',
                data: 'An exchange-traded fund (ETF) is a type of pooled investment security that operates much like a mutual fund. Typically, ETFs will track a particular index, sector, commodity, or other assets, but unlike mutual funds, ETFs can be purchased or sold on a stock exchange the same way that a regular stock can. An ETF can be structured to track anything from the price of an individual commodity to a large and diverse collection of securities. ETFs can even be structured to track specific investment strategies.',
              },
              {
                type: 'card',
                list: [
                  {
                    icon: <AccountBalanceIcon />,
                    title: 'BlackRock',
                    subtitle: 'Well known as iShares ETF',
                  },
                  {
                    icon: <AccountBalanceIcon />,
                    title: 'Vanguard',
                    subtitle: 'Well known as Vanguard ETF',
                  },
                  {
                    icon: <AccountBalanceIcon />,
                    title: 'State Street',
                    subtitle: 'Well known as SPDR and SPDR Portfolio ETF',
                  },
                ],
              },
            ],
          },
          {
            section: '2',
            list: [
              {
                type: 'text-header',
                color: 'main',
                data: 'Dow Jones Industrial Average Index',
              },
              {
                type: 'text',
                color: 'sub',
                data: 'The DJIA is one of the oldest and most commonly followed equity indexes. Many professionals consider it to be an inadequate representation of the overall U.S. stock market compared to a broader market index such as the S&P 500. The DJIA includes only 30 large companies. It is price-weighted, unlike stock indices, which use market capitalization. Furthermore, the DJIA does not use a weighted arithmetic mean.',
              },
              {
                /*
                type: 'image',
                path: '/certificate/230312_ux_foundations.png',
            */
              },
              {
                type: 'link',
                color: 'main',
                path: 'https://en.wikipedia.org/wiki/Dow_Jones_Industrial_Average',
                data: 'en.wikipedia.org',
              },
              {
                type: 'text-bold',
                color: 'main',
                data: 'State Street',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- SPDR Dow Jones Industrial Average ETF Trust (DIA)',
              },
            ],
          },
          {
            section: '3',
            list: [
              {
                type: 'text-header',
                color: 'main',
                data: 'S&P 500 Index',
              },
              {
                type: 'text',
                color: 'sub',
                data: 'The S&P 500 is a stock market index tracking the stock performance of 500 of the largest companies listed on stock exchanges in the United States. It is one of the most commonly followed equity indices.',
              },
              {
                type: 'link',
                color: 'main',
                path: 'https://en.wikipedia.org/wiki/S&P_500',
                data: 'en.wikipedia.org',
              },
              {
                type: 'text-bold',
                color: 'main',
                data: 'BlackRock',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- iShares Core S&P 500 ETF (IVV)',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- iShares S&P 500 Growth ETF (IVW)',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- iShares S&P 500 Value ETF (IVE)',
              },
              {
                type: 'text-bold',
                color: 'main',
                data: 'Vanguard',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- Vanguard S&P 500 ETF (VOO)',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- Vanguard S&P 500 Growth ETF (VOOG)',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- Vanguard S&P 500 Value ETF (VOOV)',
              },
              {
                type: 'text-bold',
                color: 'main',
                data: 'State Street',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- SPDR S&P 500 ETF Trust (SPY)',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- SPDR Portfolio S&P 500 ETF (SPLG)',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- SPDR Portfolio S&P 500 Growth ETF (SPYG)',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- SPDR Portfolio S&P 500 Value ETF (SPYV)',
              },
            ],
          },
          {
            section: '4',
            list: [
              {
                type: 'text-header',
                color: 'main',
                data: 'Nasdaq 100 Index',
              },
              {
                type: 'text',
                color: 'sub',
                data: 'The Nasdaq-100 is a stock market index made up of 101 equity securities issued by 100 of the largest non-financial companies listed on the Nasdaq stock exchange. It is a modified capitalization-weighted index. It is limited to companies from a single exchange, and it does not have any financial companies.',
              },
              {
                type: 'link',
                color: 'main',
                path: 'https://en.wikipedia.org/wiki/Nasdaq-100',
                data: 'en.wikipedia.org',
              },
              {
                type: 'text-bold',
                color: 'main',
                data: 'Invesco',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- Invesco QQQ Trust, Series 1 (QQQ)',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- Invesco NASDAQ 100 ETF (QQQM)',
              },
            ],
          },
          {
            section: '5',
            list: [
              {
                type: 'text-header',
                color: 'main',
                data: 'Russell 1000 Index',
              },
              {
                type: 'text',
                color: 'sub',
                data: 'The Russell 1000 Index is a stock market index that tracks the highest-ranking 1,000 stocks in the Russell 3000 Index, which represent about 93% of the total market capitalization of that index.',
              },
              {
                type: 'link',
                color: 'main',
                path: 'https://en.wikipedia.org/wiki/Russell_1000_Index',
                data: 'en.wikipedia.org',
              },
              {
                type: 'text-bold',
                color: 'main',
                data: 'BlackRock',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- iShares Russell 1000 ETF (IWB)',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- iShares Russell 1000 Growth ETF (IWF)',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- iShares Russell 1000 Value ETF (IWD)',
              },
              {
                type: 'text-bold',
                color: 'main',
                data: 'Vanguard',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- Vanguard Russell 1000 ETF (VONE)',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- Vanguard Russell 1000 Growth ETF (VONG)',
              },
              {
                type: 'text',
                color: 'sub',
                data: '- Vanguard Russell 1000 Value ETF (VONV)',
              },
            ],
          },
        ],
      },
      {
        article_id: 'fifo-calculation',
        image_path: '/blog/fifo-calculation/cover.png',
        title: 'FIFO Calculation',
        subtitle:
          'What FIFO is? Why it is important? You will also see some examples and tips on how to apply FIFO to your own portfolio. FIFO is a simple and effective method of calculating capital gains or losses on the sale of stock. Do not miss this opportunity to learn how to use FIFO.',
        description:
          'What FIFO is? Why it is important? You will also see some examples and tips on how to apply FIFO to your own portfolio. FIFO is a simple and effective method of calculating capital gains or losses on the sale of stock. Do not miss this opportunity to learn how to use FIFO.',
        tag: ['Calculation', 'Financial', 'Investing', 'FIFO'],
        publish: '18/01/2024',
        update: '18/01/2024',
        section_list: [
          {
            section: '1',
            list: [
              { type: 'text-header', color: 'main', data: 'What is FIFO' },
              {
                type: 'text',
                color: 'sub',
                data: 'FIFO stands for First In, First Out. It is a method of calculating capital gains or losses on the sale of stock. FIFO assumes that the shares that are sold first are the ones that were bought first. The cost basis of the sold shares is based on the oldest purchase price, while the remaining shares are valued at the most recent purchase price. FIFO is one of the common methods of calculating capital gains or losses,',
              },
            ],
          },
          {
            section: '2',
            list: [
              {
                type: 'text-header',
                color: 'main',
                data: 'Average Price Calculation Example',
              },
              {
                type: 'text',
                color: 'sub',
                data: 'Lot 1 : Buy stock A for $100 at $100.',
              },
              {
                type: 'text',
                color: 'sub',
                data: 'Lot 2 : Buy stock A for $100 at $50.',
              },
              {
                type: 'text-bold',
                color: 'main',
                data: 'The answer is not $75 per share. Because it does not have the same purchase share per lot. You have to find the sum of the shares first, then find the sum of your cost.',
              },
              {
                type: 'text',
                color: 'sub',
                data: '(cost 1 + cost 2) / (unit 1 + unit 2)',
              },
              {
                type: 'text',
                color: 'sub',
                data: '(100 + 100) / ( (100 / 100) + (100 / 50) ) = $200 / 3',
              },
              {
                type: 'text-bold',
                color: 'main',
                data: 'The answer is $66.67 per share',
              },
            ],
          },
          {
            section: '3',
            list: [
              {
                type: 'text-header',
                color: 'main',
                data: 'FIFO Calculation Example',
              },
              {
                type: 'text',
                color: 'sub',
                data: 'Lot 1 : Buy stock A for $100 at $100.',
              },
              {
                type: 'text',
                color: 'sub',
                data: 'Lot 2 : Buy stock A for $100 at $50.',
              },
              {
                type: 'text',
                color: 'sub',
                data: 'Sell two shares of stock A at $50',
              },
              {
                type: 'text-bold',
                color: 'main',
                data: 'You get one share from Lot 1 and two shares from Lot 2. When you sell two shares, your one share from Lot 1 will be sold first and the last one share from Lot 2 will be sold as well.',
              },
              {
                type: 'text',
                color: 'sub',
                data: '(cost 1 + cost 2) / (unit 1 + unit 2)',
              },
              {
                type: 'text',
                color: 'sub',
                data: '( ( price/share 1 * share 1 ) + ( price/share 2 * share 2 ) ) / (unit 1 + unit 2)',
              },
              {
                type: 'text',
                color: 'sub',
                data: '0 + ( 50 * 1 ) / ( 0 + 1 ) = $50 / 1 = $50',
              },
              {
                type: 'text-bold',
                color: 'main',
                data: 'Your average price will be the same as the price you got from Lot 2, which is $50 per share, because it is the only share left from Lot 2.',
              },
            ],
          },
          {
            section: '3',
            list: [
              {
                type: 'text-header',
                color: 'main',
                data: 'Apply for Portfolio Tracker',
              },
              {
                type: 'text',
                color: 'sub',
                data: 'This calculation method enables my Portfolio Tracker project to track historical data by tracing back to the previous day of the stock sale. I can use this data to create a portfolio dashboard that provides useful insights for investors.',
              },
              {
                type: 'link',
                color: 'main',
                path: 'https://docs.google.com/spreadsheets/d/1fCKTm-GmdA8yU-IGJx4wAqVhzPUVDFTB6rOt7doUdxg/edit?usp=sharing',
                data: 'sheet.google.com',
              },
            ],
          },
        ],
      },
      {
        article_id: 'portfolio-tracker-tutorial',
        image_path: '/blog/portfolio-tracker-tutorial/cover.png',
        title: 'Portfolio Tracker Tutorial',
        subtitle:
          'This tool can help you track your portfolio performance, analyze your historical data, calculate your dividends, and sort your holdings by various criteria. With Portfolio Tracker, you can easily monitor your financial progress and make informed decisions.',
        description:
          'This tool can help you track your portfolio performance, analyze your historical data, calculate your dividends, and sort your holdings by various criteria. With Portfolio Tracker, you can easily monitor your financial progress and make informed decisions.',
        tag: ['Tutorial', 'Financial', 'Investing', 'Google Sheet'],
        publish: '20/01/2024',
        update: '20/01/2024',
        section_list: [
          {
            section: '1',
            list: [
              {
                type: 'text-header',
                color: 'main',
                data: 'Sorry, there is nothing to show here yet',
              },
              {
                type: 'text',
                color: 'sub',
                data: 'We are working hard to bring you the latest and most relevant data. Please check back later for updates.',
              },
            ],
          },
        ],
      },
    ],
  },
];
