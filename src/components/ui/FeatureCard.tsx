import * as React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  badgeText?: string
  className?: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  badgeText,
  className = '',
}) => {
  return (
    <Card
      hoverEffect={true}
      className={`flex flex-col h-full bg-card border-border transition-all duration-200 ${className}`}
    >
      <CardHeader className="p-6 pb-3 flex flex-row items-center gap-3">
        <div className="flex items-center justify-center p-2.5 rounded-lg bg-secondary text-foreground border border-border shadow-sm">
          {icon}
        </div>
        <div className="flex flex-col gap-1">
          <CardTitle className="text-sm font-bold text-foreground leading-tight">{title}</CardTitle>
          {badgeText && (
            <div className="flex">
              <Badge
                variant="outline"
                className="text-[9px] px-1.5 py-0 font-mono tracking-wider uppercase bg-muted/30"
              >
                {badgeText}
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-1 text-xs text-muted-foreground flex-grow leading-relaxed">
        {description}
      </CardContent>
    </Card>
  )
}
