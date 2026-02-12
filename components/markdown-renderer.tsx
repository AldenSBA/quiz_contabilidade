import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  if (!content) return null;

  // Normaliza quebras de linha literais e reais
  const normalizedContent = content.replace(/\\n/g, '\n');
  const lines = normalizedContent.split('\n');
  
  return (
    <View className="gap-1">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();
        
        // Detecta tabelas por separadores ou múltiplos espaços
        const isTableLine = trimmedLine.includes('  ') || 
                           trimmedLine.includes('\t') || 
                           trimmedLine.startsWith('---') ||
                           trimmedLine.includes('|');
        
        if (isTableLine && trimmedLine !== '') {
          return (
            <View key={index} className="flex-row py-0.5 bg-muted/5 rounded px-1">
              <Text 
                style={styles.monoText}
                className="text-[13px] text-foreground"
              >
                {line}
              </Text>
            </View>
          );
        }

        return (
          <Text 
            key={index} 
            className="text-base text-foreground leading-relaxed"
          >
            {line || ' '}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  monoText: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    letterSpacing: -0.2,
  },
});
