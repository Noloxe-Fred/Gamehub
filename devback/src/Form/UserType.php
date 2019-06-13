<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotNull;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        
        $builder
        ->add('email', EmailType::class, [

                'label' => 'Email',
                'constraints' => [

                    new NotBlank(),
                    new NotNull(),
                ],
                'attr' => [
                    'class' => 'user-input'
                ]
            ])
            ->add('roles', ChoiceType::class, [

                'label' => 'Rôles',
                'multiple' => true,
                'expanded' => true,
                'choices' => [
                    
                    'Admin' => 'ROLE_ADMIN',
                    'Utilisateur' => 'ROLE_USER',
                ],
                'attr' => [
                    'class' => 'user-input'
                ]
            ])
            ->add('password', RepeatedType::class, [

                'label' => 'Mot de passe',
                'type' => PasswordType::class,
                'invalid_message' => 'Mot de passe différent.',
                'first_options' => [

                    'label' => 'Mot de passe',
                    'empty_data' => '',
                ],
                'second_options' => [

                    'label' => 'Vérifier le mot de passe',
                    'empty_data' => '',
                ],
                'attr' => [
                    'class' => 'user-input'
                ]
            ])
            ->add('firstname', TextType::class, [

                'label' => 'Prénom',
                'required' => false,
                'attr' => [
                    'class' => 'user-input'
                ]
            ])
            ->add('lastname', TextType::class, [

                'label' => 'Nom',
                'required' => false,
                'attr' => [
                    'class' => 'user-input'
                ]
            ])
            ->add('pseudo', TextType::class, [

                'label' => 'Pseudo',
                'constraints' => [

                    new NotBlank(),
                    new NotNull(),
                ],
                'attr' => [
                    'class' => 'user-input'
                ]
            ])
            ->add('photo', UrlType::class, [

                'label' => 'Photo de profil',
                'required' => false,
                'attr' => [
                    'class' => 'user-input'
                ]
            ])
            ->add('birthdate', BirthdayType::class, [

                'label' => 'Date d\'anniversaire',
                'widget' => 'single_text',
                'required' => false,
                'attr' => [
                    'class' => 'user-input'
                ]
            ])
            ->add('isActive', CheckboxType::class, [

                'label' => 'Actif',
            ])
            ->add('biography', TextareaType::class, [

                'label' => 'Biographie',
                'required' => false,
                'attr' => [
                    'class' => 'user-input',
                    'rows' => '9',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
