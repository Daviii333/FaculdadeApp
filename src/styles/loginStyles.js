import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F3057', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    marginBottom: 5,
    width: 150,
    height: 100,
  },
  appTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  appSubtitle: {
    color: '#C9D6FF',
    fontSize: 14,
    marginTop: 4,
    fontWeight: "500",
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#14274E',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: '#4B5563',
    marginBottom: 4,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
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
    fontSize: 15,
    fontWeight: '600',
  },
  linkButton: {
    marginTop: 12,
    alignItems: 'center',
  },
  linkText: {
    color: '#1F6FEB',
    fontSize: 13,
  },
  footerText: {
    marginTop: 24,
    color: '#E5E7EB',
    fontSize: 11,
    textAlign: 'center',
  },
});