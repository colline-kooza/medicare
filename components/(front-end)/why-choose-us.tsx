import { Shield, HandMetal, FileText } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={`rounded-3xl p-8 transition-colors ${className} dark:bg-opacity-90`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-2">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 ">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "100% Safe & Hygienic",
      description: "Experience hassle-free healthcare with online doctor consultations",
      className: "bg-[#98FB98]" // Light green
    },
    {
      icon: <HandMetal className="w-10 h-10" />,
      title: "Home Sample Pick up",
      description: "Experience hassle-free healthcare with online doctor consultations",
      className: "bg-[#FFB6C1]" // Light pink
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "View Reports Online",
      description: "Experience hassle-free healthcare with online doctor consultations",
      className: "bg-[#FFEB3B]" // Light yellow
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#006400] dark:text-green-400 mb-12">
          Why Choose us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={feature.className}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

