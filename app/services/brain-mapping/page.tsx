import { Metadata } from 'next'
import BrainMappingContent from './BrainMappingContent'

export const metadata: Metadata = {
  title: 'Brain Mapping & Neuro-PT | SYMMETRY Neuro-Pathway Training®',
  description: 'Optimize brain performance with qEEG brain mapping, SYMMETRY Neuro-Pathway Training®, and Neurofeedback therapy. Non-invasive, drug-free, science-backed treatments in Las Vegas.',
  keywords: [
    'brain mapping Las Vegas',
    'qEEG therapy',
    'neurofeedback Las Vegas',
    'neuro-PT therapy',
    'SYMMETRY Neuro-Pathway Training',
    'cognitive enhancement',
    'brain performance',
    'ADHD treatment Las Vegas',
    'anxiety therapy',
    'concussion recovery',
  ],
}

export default function BrainMappingPage() {
  return <BrainMappingContent />
}
