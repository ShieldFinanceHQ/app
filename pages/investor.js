import { useState } from 'react'
import styles from '../styles/layout.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Typeahead } from 'react-bootstrap-typeahead'

export default function Investor() {
  // NOTE: markets is an array of 1 element (for consistency with Typeahead component)
  const [markets, set_markets] = useState([])
  const market = markets[0]

  const exchangeOptions = [
    {
      name: 'Uniswap',
    },
    {
      name: 'Sushiswap',
    },
  ]

  const marketOptions = [
    // NOTE: Use the most liquid exchange for the pair
    {
      base: 'ETH',
      quote: 'USDT',
      exchange: 'Uniswap',
      address: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
    },
    {
      base: 'WBTC',
      quote: 'ETH',
      exchange: 'Uniswap',
      address: '0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
    },
    {
      base: 'PAID',
      quote: 'ETH',
      exchange: 'Uniswap',
      address: '0x75e5852385fa856791d703e3f04da24f5bc13975',
    },
    {
      base: 'ETH',
      quote: 'USDT',
      exchange: 'Sushiswap',
      address: '0x06da0fd433c1a5d7a4faa01111c044910a184553',
    },
    {
      base: 'WBTC',
      quote: 'ETH',
      exchange: 'Sushiswap',
      address: '0xceff51756c56ceffca006cd410b03ffc46dd3a58',
    },
  ]

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={6}>
          {
            /* TODO:
             * List<ActiveProtections>
             * List<AvailableProtections>
             * Form to create protection
             */
          }
          <h1>Investor UI</h1>
          <Form>
            <Form.Group controlId="market">
              <Form.Label>Market</Form.Label>
              <Typeahead
                id="market-typeahead"
                labelKey={market => `${market.exchange}: ${market.base}-${market.quote}`}
                onChange={set_markets}
                options={marketOptions}
                placeholder="Choose a market..."
                selected={markets}
              />
            </Form.Group>

            <Form.Group controlId="amount">
              <Form.Label>{market ? `${market.base} amount` : 'Amount'}</Form.Label>
              <Form.Control type="number" placeholder={`How much ${market ? market.base + ' ' : ''}did you buy?`} />
              {/*<Form.Text className="text-muted">*/}
              {/*  {`How much ${market ? market.base + ' ' : ''}do you want to protect?`}*/}
              {/*</Form.Text>*/}
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>{market ? `${market.base} price` : 'Price'}</Form.Label>
              <Form.Control type="number" placeholder={`What price did you buy at?`} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Find best options
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
