import Image from 'next/image'
import styles from './styles.module.scss'

interface AgentProps {
  agent: {
    role: {
      displayName: string
    }
    displayName: string
    abilities: {
      displayIcon: string
      displayName: string
    }[]
  }
}

export const Agent = ({ agent }: AgentProps) => (
  <a href="#" className={styles.agent}>
    <div>
      <p>{agent.role.displayName}</p>
      <strong>{agent.displayName}</strong>
    </div>

    <ul>
      {agent.abilities.map(ability => (
        <li key={ability.displayName}>
          <Image
            src={ability.displayIcon}
            width={36}
            height={36}
            alt={'icone da habilidade' + ability.displayName}
          />
        </li>
      ))}
    </ul>
  </a>
)
