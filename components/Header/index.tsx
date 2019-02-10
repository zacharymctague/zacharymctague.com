import { Component } from 'react'
import Link from 'next/link'
import { Header } from './styles'

export default class extends Component {
  render() {
    return (
      <Header>
        <Link href="/about" prefetch>
          <a>Work</a>
        </Link>
        <Link href="/about" prefetch>
          <a>About</a>
        </Link>
        <Link href="/about" prefetch>
          <a>Contact</a>
        </Link>
      </Header>
    )
  }
}
