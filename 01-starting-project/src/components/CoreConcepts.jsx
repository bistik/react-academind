import CoreConcept from "./CoreConcept"
import Section from "./Section"
import { CORE_CONCEPTS } from "../data"
export default function CoreConcepts() {
    return (
      <Section title="Core Concepts" id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map(
              (coreConcept) => <CoreConcept {...coreConcept} key={coreConcept.title} />)
              }
          </ul>
      </Section>
    )
}