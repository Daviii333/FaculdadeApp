import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F3057',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  headerSubtitle: {
    color: '#C9D6FF',
    fontSize: 12,
    marginTop: 4,
    maxWidth: 260,
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  content: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  label: {
    fontSize: 13,
    color: '#374151',
    marginBottom: 4,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#111827',
  },
  button: {
    backgroundColor: '#1F6FEB',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    marginTop: 16,
    elevation: 2,
  },
  summaryTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  summaryText: {
    fontSize: 13,
    color: '#4B5563',
  },
  exportText: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 10,
  },
});
